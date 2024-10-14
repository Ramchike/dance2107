from sqlmodel import SQLModel, Session, create_engine
from config import DB_URL

engine = create_engine(url=DB_URL, echo=True)

def create_all():
    SQLModel.metadata.create_all

async def db_add(entity):
    with Session(engine) as session:
        session.add(entity)
        session.commit()
        return entity
    
