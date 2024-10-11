import React from "react";
import NoteDisplay from "./NoteDisplay";

function List({ notes, label, setNotes }) {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 md:mt-7 mt-6">{label}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notes.length === 0 ? (
          <p className="text-[#795757]">Nothing To Show</p>
        ) : (
          notes.map((note) => (
            <NoteDisplay action={setNotes} key={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
}

export default List;
