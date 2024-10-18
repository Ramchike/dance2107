from fastapi import FastAPI
from fastapi.concurrency import asynccontextmanager
from db.tables import *
from base.database import init_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("run run run")
    await init_db()
    yield

app = FastAPI(
    title="Davinchik2107",
    lifespan=lifespan,
)