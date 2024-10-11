import React from "react";
import ActionButton from "./ActionButtons";
import ItemContent from "./ItemContent";

function NoteDisplay({ id, title, body, createdAt, archived, action }) {
  const handleDeleteNote = (itemId) => {
    action((notes) => notes.filter((note) => note.id !== itemId));
  };
  const handleArchiveNote = (itemId) => {
    action((notes) =>
      notes.map((note) =>
        note.id === itemId ? { ...note, archived: !note.archived } : note
      )
    );
  };

  return (
    <div className="bg-[#FFF0D1] border border-[#795757] rounded-3xl p-6 shadow-lg md:mb-6 transition-transform transform hover:scale-105">
      <div className="flex flex-col h-full">
        <ItemContent
          title={title}
          body={body}
          createdAt={createdAt}
          archived={archived}
        />
        <div className="mt-auto flex justify-between">
          <ActionButton
            onDeleteNote={handleDeleteNote}
            onArchiveNote={handleArchiveNote}
            id={id}
            archived={archived}
          />
        </div>
      </div>
    </div>
  );
}

export default NoteDisplay;
