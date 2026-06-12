import datetime
import json
import os
import queue
import threading

import pandas as pd
import requests
import streamlit as st
from confluent_kafka.schema_registry import SchemaRegistryClient
from dotenv import load_dotenv
from requests.auth import HTTPBasicAuth

# Load env variables
load_dotenv()

st.set_page_config(page_title="Fraudulent Claims Dashboard", layout="wide")

st.markdown(
    """
    <style>
        html, body, [data-testid="stAppViewContainer"] {
            overflow-anchor: none !important;
        }
    </style>
""",
    unsafe_allow_html=True,
)

st.title("Claims Streaming Dashboard")
st.markdown(
    """This dashboard continuously queries a ksqlDB streams and displays high value medical claims in real time."""
)

from streamlit_autorefresh import st_autorefresh

st_autorefresh(interval=2000, key="stream_refresh")

# -------------------------------------------------------------------
# Configuration
# -------------------------------------------------------------------

KSQL_ENDPOINT = st.sidebar.text_input("ksqlDB Endpoint", value=os.getenv("KSQL_ENDPOINT"))

KSQL_API_KEY = st.sidebar.text_input("KSQL API Key", type="password")

KSQL_API_SECRET = st.sidebar.text_input("KSQL API Secret", type="password")

MAX_ROWS = st.sidebar.slider("Maximum Rows", min_value=10, max_value=500, value=100, step=10)

START_STREAM = st.sidebar.button("Start Stream")

### Queries
PROVIDER_SPIKE_QUERY = """
    SELECT *
    FROM provider_claim_spikes
    EMIT CHANGES;
"""

HIGH_VALUE_QUERY = """
    SELECT *
    FROM high_value_claims
    EMIT CHANGES;
"""

if "claims" not in st.session_state:
    st.session_state.claims = []
    st.session_state.spikes = []
    st.session_state.stream_started = False
    st.session_state["event_queue"] = queue.Queue()

# get all of our schemas once
if "high_val_cols" not in st.session_state:
    sr_conf = {
        "url": os.getenv("REGISTRY_URL"),
        "basic.auth.user.info": f'{str(os.getenv("REQUESTS_API_KEY"))}:{str(os.getenv("REQUESTS_API_SECRET"))}',
    }
    schema_registry_client = SchemaRegistryClient(sr_conf)

    # note that your generated stream name may be different
    high_val_schema_str = schema_registry_client.get_version(
        "pksqlc-4my2e5kHIGH_VALUE_CLAIMS-value",  # pragma: allowlist secret
        schema_registry_client.get_versions(
            "pksqlc-4my2e5kHIGH_VALUE_CLAIMS-value"  # pragma: allowlist secret
        )[-1],
    ).schema.schema_str

    print(high_val_schema_str)

    schema = json.loads(high_val_schema_str)  # type: ignore
    st.session_state.high_val_cols = [f["name"] for f in schema["fields"]]

    # note that your generated stream name may be different
    spike_schema_str = schema_registry_client.get_version(
        "pksqlc-4my2e5kPROVIDER_CLAIM_SPIKES-value",  # pragma: allowlist secret
        schema_registry_client.get_versions(
            "pksqlc-4my2e5kPROVIDER_CLAIM_SPIKES-value"  # pragma: allowlist secret
        )[-1],
    ).schema.schema_str

    schema = json.loads(spike_schema_str)  # type: ignore
    st.session_state.spike_cols = [f["name"] for f in schema["fields"]]

    print(spike_schema_str)


st.subheader("High Value Claims")
hv_metrics = st.container(height=500)
hv_table = st.empty()

st.subheader("Provider Claim Spikes")
ps_metrics = st.container(height=500)
ps_table = st.empty()

placeholder_status = st.empty()


def stream_query(query_name, sql, event_queue, data_columns):
    print("streaming")

    response = requests.post(
        str(os.getenv("KSQL_ENDPOINT")),
        auth=HTTPBasicAuth(KSQL_API_KEY, KSQL_API_SECRET),
        headers={"Content-Type": "application/vnd.ksql.v1+json; charset=utf-8"},
        json={"sql": sql},
        stream=True,
    )

    columns = None

    for line in response.iter_lines():
        if not line:
            continue

        decoded = line.decode("utf-8")

        try:
            record = json.loads(decoded)
            print(record)
        except Exception as e:
            print(e)
            continue

        # First row is columns
        if columns is None and isinstance(record, dict):
            columns = record["columnNames"]
            continue

        values = record

        row = dict(zip(columns, values, strict=False))  # type: ignore

        row["stream"] = query_name  # type: ignore

        event_queue.put(row)


if START_STREAM and not st.session_state.stream_started:
    st.session_state.stream_started = True

    print("starting")

    try:
        threading.Thread(
            target=stream_query,
            args=(
                "spike",
                PROVIDER_SPIKE_QUERY,
                st.session_state.event_queue,
                st.session_state.spike_cols,
            ),
            daemon=True,
        ).start()

        threading.Thread(
            target=stream_query,
            args=(
                "high_val_claim",
                HIGH_VALUE_QUERY,
                st.session_state.event_queue,
                st.session_state.high_val_cols,
            ),
            daemon=True,
        ).start()

    except requests.exceptions.RequestException as e:
        placeholder_status.error(f"Connection error: {e}")

    except Exception as e:
        placeholder_status.error(f"Unexpected error: {e}")

## outside of block
while not st.session_state.event_queue.empty():
    print("event")

    event = st.session_state.event_queue.get()

    if event["stream"] == "spike":
        data_rows = {k: v for k, v in event.items() if k != "stream"}
        data_rows["WINDOWSTART"] = datetime.datetime.fromtimestamp(
            data_rows["WINDOWSTART"] / 1000
        ).strftime("%c")
        data_rows["WINDOWEND"] = datetime.datetime.fromtimestamp(
            data_rows["WINDOWEND"] / 1000
        ).strftime("%c")
        st.session_state.spikes.insert(0, data_rows)

    if event["stream"] == "high_val_claim":
        data_rows = {k: v for k, v in event.items() if k != "stream"}
        st.session_state.claims.insert(0, data_rows)
        st.session_state.claims = st.session_state.claims[:MAX_ROWS]

claims_df = pd.DataFrame(st.session_state.claims, columns=st.session_state.high_val_cols)

with hv_metrics.container():
    if len(claims_df) > 0:
        col1, col2 = st.columns(2)

        col1.metric("High Value Claims", len(claims_df))
        col2.metric("Total High Claim Amount", f"${claims_df['CLAIM_AMOUNT'].sum():,.2f}")

        st.dataframe(claims_df, width="stretch", height=300)

spikes_df = pd.DataFrame(st.session_state.spikes, columns=st.session_state.spike_cols)

with ps_metrics.container():
    if len(spikes_df) > 0:
        ps_col1, ps_col2 = st.columns(2)

        ps_col1.metric("Claim Spikes Observed", len(spikes_df))
        ps_col2.metric("Total Claim Spike Value", f"${spikes_df['TOTAL_CLAIM_VALUE'].sum():,.2f}")

        st.dataframe(spikes_df, width="stretch", height=300)
