//29.2
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
  const [editNum, setEditNum] = useState(null);

  const result = notes.map((note, index) => {
    return (
      <li key={index}>
        {note}
        <button onClick={() => setEditNum(index)}>Edit</button>
      </li>
    );
  });

  function changeHandler(event) {
    setNotes([
      ...notes.slice(0, editNum),
      event.target.value,
      ...notes.slice(editNum + 1),
    ]);
  }

  return (
    <div>
      <ul>{result}</ul>
      <br />
      <input
        value={editNum === null ? "" : notes[editNum]}
        onChange={changeHandler}
        onBlur={(event) => (event.target.value = "")}
      />
    </div>
  );
}

export default App;
