from sqlmodel import SQLModel
from sqlalchemy.ext.asyncio import create_async_engine
from config import DB_URL
from src.db.tables import User

engine = create_async_engine(
    url=DB_URL, 
    echo=True
)

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)

    
