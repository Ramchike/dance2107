from decimal import Decimal
from typing import List
from sqlalchemy import BigInteger, Column
from sqlmodel import Field, Relationship, SQLModel

class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int = Field(sa_column=Column(BigInteger(), primary_key=True))
    avatars: list["Avatar"] = Relationship()
    sex: bool
    name: str
    surname: str

class Like(SQLModel, table=True):
    __tablename__ = "likes"

    id: int = Field(primary_key=True)
    from_id: int = Field(foreign_key="users.id")
    to_id: int = Field(foreign_key="users.id")
    is_reverse: bool

class Avatar(SQLModel, table=True):
    __tablename__ = "avatars"

    id: str = Field(primary_key=True)
    user_id: int = Field(foreign_key="users.id")