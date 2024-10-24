from typing import Literal, Optional
from sqlalchemy import BigInteger, Column, String
from sqlmodel import Field, Relationship, SQLModel
from config import LITERALIS
from .dto import Sex
    
class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int = Field(sa_column=Column(BigInteger(), primary_key=True))
    avatars: list["Avatar"] = Relationship(back_populates="user")
    sex: Sex
    name: str
    surname: str
    focus_id: Optional[int] = Field(default=None, foreign_key="users.id")
    litera: LITERALIS = Field(sa_type=String)
    
class Like(SQLModel, table=True):
    __tablename__ = "likes"

    id: int = Field(primary_key=True)
    from_id: int = Field(foreign_key="users.id")
    to_id: int = Field(foreign_key="users.id")
    is_reverse: bool

class Dolbaeb2107(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str

class Avatar(SQLModel, table=True):
    __tablename__ = "avatars"

    id: str = Field(primary_key=True)
    user_id: int = Field(foreign_key="users.id")
    user: "User" = Relationship(back_populates="avatars")