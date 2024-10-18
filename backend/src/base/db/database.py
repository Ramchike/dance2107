from sqlmodel import SQLModel
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from config import DB_URL

engine = create_async_engine(
    url=DB_URL, 
    echo=True
)

def get_session() -> AsyncSession:
    session = async_sessionmaker(engine)
    return session()


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)

    
