from abc import ABC, abstractmethod
from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel


class Repository(ABC):
    """
    Общий интерфейс репозитория. 
    Содержит сессию и методы для взаимодействия с базой данных определенной модели/таблицы.
    """
    
    
    def __init__(self, session: AsyncSession) -> None:
        self.session: AsyncSession = session
    
    @abstractmethod
    async def add(self, model: BaseModel) -> BaseModel:
        raise NotImplementedError
    
    @abstractmethod
    async def delete(self, id: int) -> None:
        raise NotImplementedError
    
    @abstractmethod
    async def update(self, id: int, model: BaseModel) -> Optional[BaseModel]:
        raise NotImplementedError
    
    @abstractmethod
    async def get(self, id: int) -> Optional[BaseModel]:
        raise NotImplementedError
    
    @abstractmethod
    async def list(self) -> List[BaseModel]:
        raise NotImplementedError
