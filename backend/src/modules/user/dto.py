from typing import Literal
from pydantic import BaseModel
from enum import Enum
from backend.config import LITERALIS


class Sex(Enum):
    MALE = 0
    WOMAN = 0

class UserCreate(BaseModel):
    id: int
    name: str
    surname: str
    avatar: str
    sex: Sex
    litera: LITERALIS

class UserGet(BaseModel):
    name: str
    surname: str
    avatar: str