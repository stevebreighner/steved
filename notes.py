import json
import os
from datetime import datetime

FILE = "notes.json"

# load existing notes (or start empty)
if os.path.exists(FILE):
    with open(FILE, "r") as f:
        notes = json.load(f)
else:
    notes = []

# input note
text = input("Write note: ")

# create entry
note = {
    "text": text,
    "time": datetime.now().isoformat()
}

# add to top
notes.insert(0, note)

# save back to file
with open(FILE, "w") as f:
    json.dump(notes, f, indent=2)

print("Saved.")