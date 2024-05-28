from sqlalchemy.orm import sessionmaker

from database import Dictionary, engine # type: ignore

SessionLocal = sessionmaker(bind=engine)

session = SessionLocal()

def get_entries():
    entries = session.query(Dictionary).all()
    all_entries = []
    for entry in entries:
        entry_dict = {
            'id': entry.id,
            'word': entry.word,
            'is_global': entry.is_global,
            'game_origin': entry.game_origin,
            'meaning': entry.meaning,
            'example': entry.example,
            'connection_to_ids': entry.connection_to_ids
        }
        all_entries.append(entry_dict)
        
    return all_entries    
    
print(get_entries())
