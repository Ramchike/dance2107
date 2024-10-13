from sqlmodel import Session


async def db_add(entity):
    with Session(engine) as session:
        session.add(entity)
        session.commit()
        return entity