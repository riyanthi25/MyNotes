import React from "react";
import List from "./List";
import CreateNoteForm from "./CreateNoteForm";

function Body({ notesAll, notesArchive, setNotes }) {
  const lists = [
    { label: "Active Notes", notes: notesAll },
    { label: "Archive Notes", notes: notesArchive },
  ];

  return (
    <div className="mx-auto p-4 md:px-16 px-11 bg-[#FFF0D1] text-[#3B3030]">
      <CreateNoteForm setNotes={setNotes} />
      {lists.map(({ label, notes }) => (
        <List key={label} label={label} setNotes={setNotes} notes={notes} />
      ))}
    </div>
  );
}

export default Body;
