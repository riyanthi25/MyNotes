import { useEffect, useState } from "react";
import { getInitialData } from "./utils";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesAll = (searchNotes.length > 0 ? searchNotes : notes).filter(
    (note) => !note.archived
  );

  const notesArchive = (searchNotes.length > 0 ? searchNotes : notes).filter(
    (note) => note.archived
  );

  useEffect(() => {
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchNotes(filteredNotes);
  }, [query, notes]);

  return (
    <div>
      <Header search={query} setQuery={setQuery} />
      <Body
        notesAll={notesAll}
        notesArchive={notesArchive}
        setNotes={setNotes}
      />
      <Footer />
    </div>
  );
}

export default App;
