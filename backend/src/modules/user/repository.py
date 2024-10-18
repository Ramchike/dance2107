from backend.src.base.interface.repository import Repository
from .dto import UserCreate


class UserRepository(Repository):
    async def get_by_id(id: int, data: UserCreate)