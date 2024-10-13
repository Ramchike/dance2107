from sqlmodel import Field, SQLModel

class User(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    tg_id: int 
    sex: int
    name: str
    surname: str