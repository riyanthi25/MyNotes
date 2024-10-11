import { useState } from "react";
import Input from "./FormInput";
import { SlNote } from "react-icons/sl";

function CreateNoteForm({ setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAlert = (message) => {
    alert(message);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    
    if (!title.trim() || !body.trim()) {
      handleAlert("Failed to create note. Please fill in both fields.");
      return;
    }
    
    const timestamp = new Date().toISOString();
    setNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title,
        body,
        archived: false,
        createdAt: timestamp,
      },
    ]);

    // Alert success
    handleAlert("Note created successfully!");

    // Reset the form fields
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-input mx-auto md:max-w-2xl md:p-4 bg-[#FFF0D1] rounded-[35px] shadow-xl md:my-5 my-1 md:px-10 px-4 md:pb-7 pb-6 md:pt-0 pt-6">
      <h2 className="md:text-4xl text-2xl font-bold md:mb-4 mb-0 text-[#3B3030] md:pt-3 pt-0 md:text-left text-center">
        Create New Notes
      </h2>
      <form onSubmit={onSubmitEventHandler} className="flex flex-col">
        <div className="flex justify-between mb-2">
          <div className="flex-grow"></div>
          <p className="text-[#795757]">Character left: {50 - title.length}</p>
        </div>
        <Input
          value={title}
          onChange={setTitle}
          id="title"
          name="title"
          type="text"
          placeholder="Title..."
          required
          className="md:p-3 p-2 mb-4 bg-[#FFF0D1] text-[#664343] border border-[#795757] md:rounded-3xl rounded-xl focus:outline-none focus:ring-2 focus:ring-[#795757] placeholder-[#795757] w-full md:text-lg"
        />
        <Input
          value={body}
          onChange={setBody}
          id="body"
          name="body"
          type="textarea"
          placeholder="Write your notes here..."
          required
          className="md:p-3 p-2 md:mb-4 mb-0 bg-[#FFF0D1] text-[#664343] border border-[#795757] md:rounded-3xl rounded-xl focus:outline-none focus:ring-2 focus:ring-[#795757] placeholder-[#795757] md:h-40 h-20 w-full md:text-lg"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center md:w-40 w-28 px-5 py-2 bg-[#3B3030] text-[#FFF0D1] font-bold md:rounded-3xl rounded-xl transition-colors duration-300 hover:bg-[#2C2727] focus:outline-none focus:ring-2 focus:ring-[#3B3030] md:mt-0 mt-3"
          >
            Create <SlNote className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNoteForm;
