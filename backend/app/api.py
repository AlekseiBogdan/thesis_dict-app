from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from db_manager import get_entries # type: ignore

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

@app.get('/', tags=["root"])
async def read_db():
    data = get_entries()
    return data
