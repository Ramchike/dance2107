from .model import User, Dolbaeb2107
from src.base.db.database import *
from src.modules.user.repository import UserRepository, DolbaebRepository
from .dto import UserCreate

class UserService():
    
    async def register(self, data: User):
        async with get_session() as session:
            return await UserRepository(session).add(data)
        
class DolbaebService():

    async def register(self, data: Dolbaeb2107):
        async with get_session() as session:
            return await DolbaebRepository(session).add(data)

        