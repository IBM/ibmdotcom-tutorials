
from sklearn.model_selection import train_test_split
from tsfm_public.models.tspulse import TSPulseForReconstruction
from tsfm_public.models.tspulse.utils.helpers import get_embeddings
from tsfm_public.toolkit.dataset import ClassificationDFDataset
from tsfm_public.toolkit.time_series_classification_preprocessor import (
    TimeSeriesClassificationPreprocessor,
)
from tsfm_public.toolkit.util import convert_tsfile_to_dataframe

from tsfm_public.models.tspulse import TSPulseForClassification
from tsfm_public.toolkit.dataset import ClassificationDFDataset
from tsfm_public.toolkit.lr_finder import optimal_lr_finder
from tsfm_public.toolkit.time_series_classification_preprocessor import TimeSeriesClassificationPreprocessor
from tsfm_public.toolkit.util import convert_tsfile_to_dataframe
from transformers import EarlyStoppingCallback, Trainer, TrainingArguments, set_seed
from transformers.data.data_collator import default_data_collator
import math
import numpy as np
import pandas as pd
import os
import tempfile
from torch.optim import AdamW
from torch.optim.lr_scheduler import OneCycleLR
from torch.utils.data import DataLoader, random_split
from transformers import EarlyStoppingCallback, Trainer, TrainingArguments, set_seed
from transformers.data.data_collator import default_data_collator
import numpy as np
import random
from collections import Counter


def introduce_nans(data, targets, nan_fraction=0.1, block_size=8, seed=42):
    df_nan = data.copy()
    num_values = int(df_nan.shape[0] * len(targets))
    num_nans = int(nan_fraction * num_values)
    rows = np.random.randint(0, df_nan.shape[0], size=num_nans)
    #cols = np.random.randint(1, len(targets), size=num_nans)
    cols = [random.choice(targets) for _ in range(num_nans)]

    for r, col in zip(rows, cols):
        #df_nan.iat[r, col] = np.nan
        df_nan.loc[r, col] = np.nan

    n_rows, n_cols = df_nan.shape
    rng = np.random.default_rng(seed)

    num_blocks = int((num_nans / block_size))  # missing in blocks

    for _ in range(num_blocks):
        col = rng.integers(1, n_cols)
        start_row = rng.integers(n_rows - block_size + 1)
        df_nan.iloc[start_row : start_row + block_size, col] = np.nan

    return df_nan



def mean_absolute_percentage_error(y_true, y_pred): 
    y_true, y_pred = np.array(y_true), np.array(y_pred)
    return np.mean(np.abs((y_true - y_pred) / y_true)) * 100


def custom_metric(actual, missing_df, prediction, column_header="results"):
    """Simple function to compute MSE"""
    a = actual.to_numpy(dtype=float)
    p = prediction.to_numpy(dtype=float)

    missing_positions = np.isnan(missing_df)

    mse = np.mean(np.square(a[missing_positions] - p[missing_positions]))
    mae = np.mean(np.abs(a[missing_positions] - p[missing_positions]))

    mape = np.mean(np.abs((a[missing_positions] - p[missing_positions]) / a[missing_positions])) * 100
    
    return pd.DataFrame(
        {
            column_header: {
                "root_mean_squared_error": np.sqrt(mse),
                "mean_absolute_error": mae,
                "mape": mape,
            }
        }
    )


def test_train_dataset(time_series, test_size, input_columns, label_column):

    tsp = TimeSeriesClassificationPreprocessor(
        input_columns=["ts"],
        label_column='type',
        scaling=False,
    )

    tsp.train(time_series)  # training the tsp (gets the scaling params for the data if scaling=True in tsp)
    prep_tsp = tsp.preprocess(time_series)

    train_df, test_df = train_test_split(prep_tsp, test_size=test_size)

    train_dataset = ClassificationDFDataset(
        train_df,
        id_columns=[],
        timestamp_column=None,
        input_columns=input_columns,
        label_column=label_column,
        context_length=512,
        static_categorical_columns=[],
        stride=1,
        enable_padding=False,
        full_series=True,
    )

    test_dataset = ClassificationDFDataset(
        test_df,
        id_columns=[],
        timestamp_column=None,
        input_columns=input_columns,
        label_column=label_column,
        context_length=512,
        static_categorical_columns=[],
        stride=1,
        enable_padding=False,
        full_series=True,
    )

    return (test_dataset, train_dataset)

def create_classify_trainer(classifier_model, train_dataset, valid_dataset):

    temp_dir = tempfile.mkdtemp()

    EPOCHS = 100
    BATCH_SIZE = 32

    set_seed(42)

    suggested_lr = None

    if suggested_lr is None:
        lr, optimal_class_model = optimal_lr_finder(
            classifier_model,
            train_dataset,
            batch_size=BATCH_SIZE,
        )
        suggested_lr = lr

    finetune_args = TrainingArguments(
        output_dir=temp_dir,
        overwrite_output_dir=True,
        learning_rate=suggested_lr,
        num_train_epochs= EPOCHS,
        do_eval=True,
        eval_strategy="epoch",
        per_device_train_batch_size=BATCH_SIZE,
        per_device_eval_batch_size=BATCH_SIZE,
        eval_accumulation_steps=None,
        dataloader_num_workers=1,
        report_to="tensorboard",
        save_strategy="epoch",
        logging_strategy="epoch",
        save_total_limit=1,
        logging_dir=os.path.join("tspulse_finetuned_models/", "output"),  # Make sure to specify a logging directory
        load_best_model_at_end=True,  # Load the best model when training ends
        metric_for_best_model="eval_loss",  # Metric to monitor for early stopping
        greater_is_better=False,  # For loss
    )

    # Create the early stopping callback
    early_stopping_callback = EarlyStoppingCallback(
        early_stopping_patience=5,  # Number of epochs with no improvement after which to stop
        early_stopping_threshold=0.00001  # Minimum improvement required to consider as improvement
    )

    # Optimizer and scheduler
    optimizer = AdamW(optimal_class_model.parameters(), lr=suggested_lr)
    scheduler = OneCycleLR(
        optimizer,
        suggested_lr,
        epochs=EPOCHS,
        #steps_per_epoch=math.ceil(len(train_dataset)),
        steps_per_epoch=64
    )

    finetune_trainer = Trainer(
        model=optimal_class_model,
        args=finetune_args,
        train_dataset=train_dataset,
        eval_dataset=valid_dataset,
        callbacks=[early_stopping_callback],
        optimizers=(optimizer, scheduler),
    )

    return finetune_trainer