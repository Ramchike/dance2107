import asyncio
from fastapi import FastAPI
from schemas import user
from db.db import connect, create_all

if __name__ == "__main__":
    create_all()