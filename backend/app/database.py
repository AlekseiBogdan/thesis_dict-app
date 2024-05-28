from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base

from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.types import JSON

URL_DATABASE = 'sqlite:///./dictionary.db'

engine = create_engine(URL_DATABASE, connect_args={"check_same_thread": False})

Base = declarative_base()

class Dictionary(Base):
    __tablename__ = 'dictionaries'

    id = Column(Integer, primary_key=True, index=True)
    word = Column(String, nullable=False)
    is_global = Column(Boolean, nullable=False)
    game_origin = Column(String)
    meaning = Column(String, nullable=False)
    example = Column(String)
    connection_to_ids = Column(JSON)

Base.metadata.create_all(bind=engine)