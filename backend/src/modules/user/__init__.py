from backend.src.modules.user.service import UserService
from fastapi import APIRouter
from backend.src import app

likeRouter = APIRouter(prefix='like', tags=['Работа с лайками'])
app.include_router(likeRouter)




