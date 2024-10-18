from enum import Enum
from pydantic import BaseModel

class Sex(Enum):
    MEN = 0
    WOMAN = 1

class User(BaseModel):
    id: int
    tg_id: int
    sex: Sex
    name: str
    surname: str
    avatar: str
    
