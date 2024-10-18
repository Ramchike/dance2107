from src.base.interface.repository import Repository
from .model import Avatar, Dolbaeb2107, User


class UserRepository(Repository):

    async def add(self, data: User) -> User:
        avatar = Avatar("123", User.id)
        self.session.add(avatar)
        self.session.add(data)
        await self.session.commit()
        await self.session.refresh(data)
        return data
    
    async def get():
        pass

    async def delete():
        pass

    async def list():
        pass

    async def update():
        pass

class DolbaebRepository(Repository):

    async def add(self, data: Dolbaeb2107) -> Dolbaeb2107:
        self.session.add(data)
        await self.session.commit()
        await self.session.refresh(data)
        return data
    
    async def get():
        pass

    async def delete():
        pass

    async def list():
        pass

    async def update():
        pass
