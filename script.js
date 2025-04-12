function saveNote() {
    const title = document.getElementById("note-title").value;
    const content = document.getElementById("note-content").value;
  
    if (title && content) {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
  
      notes.push({
        title,
        content,
        timestamp: new Date().toLocaleString(),
      });
  
      localStorage.setItem("notes", JSON.stringify(notes));
      document.getElementById("note-title").value = "";
      document.getElementById("note-content").value = "";
      displayNotes();
    } else {
      alert("Please enter both title and content.");
    }
  }
  
  function displayNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const container = document.getElementById("notes-container");
    container.innerHTML = "";
  
    notes.forEach((note, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <small>${note.timestamp}</small><br/>
        <button onclick="deleteNote(${index})">Delete</button>
      `;
      container.appendChild(noteDiv);
    });
  }
  
  function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
  
  // Load notes on page load
  window.onload = displayNotes;
  