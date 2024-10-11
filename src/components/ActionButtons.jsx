import React from "react";
import { IoMdArchive } from "react-icons/io";
import { MdUnarchive } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

function ActionButton({ onDeleteNote, onArchiveNote, id, archived }) {
  const handleDelete = (item) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmDelete) {
      onDeleteNote(item);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        id={id}
        onClick={() => handleDelete(id)}
        aria-label="Delete Button"
        className="text-xl"
      >
        <RiDeleteBin5Fill />
      </button>
      <button
        id={id}
        onClick={() => onArchiveNote(id)}
        aria-label="Archive Button"
        className="text-xl"
      >
        {archived ? <MdUnarchive /> : <IoMdArchive />}
      </button>
    </div>
  );
}

export default ActionButton;
