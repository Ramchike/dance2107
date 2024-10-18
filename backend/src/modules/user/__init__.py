from fastapi import APIRouter
from .dto import UserCreate
from .service import UserService, DolbaebService
from .model import *

Router = APIRouter(prefix='/user', tags=['Пользователи'])

@Router.get("/hello")
async def hello():
    return "hello world"

@Router.post("/register")
async def register(user: User) -> User:
    return await UserService().register(user)

@Router.post("/test")
async def register(user: Dolbaeb2107) -> Dolbaeb2107:
    return await DolbaebService().register(user)


