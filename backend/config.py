import os, dotenv
from typing import Literal

dotenv.load_dotenv()

DB_DRIVER = os.getenv("DB_DRIVER")
#print(DB_DRIVER)
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_USER = os.getenv("DB_USER")
DB_PORT = os.getenv("DB_PORT")
DB_URL = f"{DB_DRIVER}://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
#print(DB_URL)

LITERALIS = Literal[
    "10И",
    "11И",
    "10П",
    "11П",
    "10Ч",
    "11Ч",
    "10К",
    "11К",
    "10С",
    "11С",
    "10Ю",
    "11Ю",
    "10А",
    "11А",
    "10Ф",
    "10Ж",
    "11Ж",
    "10Б",
    "11Б",
    "10Н",
    "11Н"
    "10О",
    "11О"
    "9О",
    "9И",
    "9Н",
]