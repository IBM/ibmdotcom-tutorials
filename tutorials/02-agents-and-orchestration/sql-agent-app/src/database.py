import sqlite3
from sqlalchemy import create_engine
from langchain_community.utilities.sql_database import SQLDatabase
import pandas as pd

# Create a sample SQLite database with car dealership, car, and sales data
def create_sql_database():
    sql_script = """
    DROP TABLE IF EXISTS [Dealerships];

    DROP TABLE IF EXISTS [Cars];

    DROP TABLE IF EXISTS [Sales];

    CREATE TABLE [Dealerships] (
        [id] INTEGER PRIMARY KEY,
        [name] TEXT NOT NULL,
        [location] TEXT NOT NULL
    );

    CREATE TABLE [Cars] (
        [id] INTEGER PRIMARY KEY,
        [make] TEXT NOT NULL,
        [model] TEXT NOT NULL,
        [year] INTEGER NOT NULL,
        [color] TEXT NOT NULL
    );

    CREATE TABLE [Sales] (
        [id] INTEGER PRIMARY KEY,
        [car_id] INTEGER NOT NULL,
        [dealership_id] INTEGER NOT NULL,
        [sale_date] DATE NOT NULL,
        [sale_price] REAL NOT NULL,
        FOREIGN KEY ([car_id]) REFERENCES [Cars] ([id]),
        FOREIGN KEY ([dealership_id]) REFERENCES [Dealerships] ([id])
    );


    INSERT INTO [Dealerships] ([id], [name], [location]) VALUES
        (1, 'Dealership A', 'New York'),
        (2, 'Dealership B', 'Los Angeles'),
        (3, 'Dealership C', 'Chicago'),
        (4, 'Dealership D', 'Houston'),
        (5, 'Dealership E', 'Phoenix'),
        (6, 'Dealership F', 'Philadelphia'),
        (7, 'Dealership G', 'San Antonio'),
        (8, 'Dealership H', 'San Diego'),
        (9, 'Dealership I', 'Dallas'),
        (10, 'Dealership J', 'San Jose');

    INSERT INTO [Cars] ([id], [make], [model], [year], [color]) VALUES
        (1, 'Toyota', 'Camry', 2020, 'Blue'),
        (2, 'Honda', 'Civic', 2019, 'Red'),
        (3, 'Ford', 'Mustang', 2021, 'Black'),
        (4, 'Chevrolet', 'Silverado', 2018, 'White'),
        (5, 'Nissan', 'Altima', 2020, 'Gray'),
        (6, 'Kia', 'Optima', 2020, 'Silver'),
        (7, 'Hyundai', 'Elantra', 2019, 'Black'),
        (8, 'Volkswagen', 'Golf', 2021, 'Red'),
        (9, 'BMW', '3 Series', 2018, 'White'),
        (10, 'Mercedes-Benz', 'C-Class', 2020, 'Gray'),
        (11, 'Audi', 'A4', 2019, 'Blue'),
        (12, 'Lexus', 'ES', 2021, 'Black'),
        (13, 'Toyota', 'Corolla', 2018, 'White'),
        (14, 'Honda', 'Accord', 2020, 'Gray'),
        (15, 'Ford', 'Fusion', 2019, 'Red');

    INSERT INTO [Sales] ([id], [car_id], [dealership_id], [sale_date], [sale_price]) VALUES
        (1, 1, 1, '2022-01-01', 25000.0),
        (2, 2, 2, '2022-02-01', 20000.0),
        (3, 3, 3, '2022-03-01', 30000.0),
        (4, 4, 1, '2022-04-01', 40000.0),
        (5, 5, 2, '2022-05-01', 28000.0),
        (6, 6, 4, '2022-06-01', 22000.0),
        (7, 7, 5, '2022-07-01', 20000.0),
        (8, 8, 6, '2022-08-01', 28000.0),
        (9, 9, 7, '2022-09-01', 35000.0),
        (10, 10, 8, '2022-10-01', 32000.0),
        (11, 11, 9, '2022-11-01', 30000.0),
        (12, 12, 10, '2022-12-01', 38000.0),
        (13, 13, 1, '2023-01-01', 25000.0),
        (14, 14, 2, '2023-02-01', 28000.0),
        (15, 15, 3, '2023-03-01', 22000.0);
        
    """
    # Create a connection to the in-memory database
    connection = sqlite3.connect(":memory:")
    connection.executescript(sql_script)
    # Create an SQLAlchemy engine to connect to the database
    engine = create_engine(
        "sqlite://",
        creator=lambda: connection
    )
    # Create a SQLDatabase object to connect to the database
    db = SQLDatabase(engine)
    return db