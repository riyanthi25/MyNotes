import React from "react";

function NoteCard({ note }) {
  return (
    <div className="bg-[#FFF0D1] border border-[#795757] rounded-3xl p-4 shadow-lg mb-4 transition-transform transform hover:scale-105">
      <h3 className="text-[#3B3030] font-bold text-xl mb-2">{note.title}</h3>
      <p className="text-[#664343] mb-4">{note.body}</p>
      <span className="text-[#795757] text-sm">
        {new Date(note.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
}

export default NoteCard;
