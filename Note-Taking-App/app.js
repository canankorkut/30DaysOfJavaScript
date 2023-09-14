let addNoteButton = document.getElementById("addNoteButton")
let notePage = document.querySelector(".notePage")
let noteTitle = document.getElementById("noteTitle")
let noteText = document.getElementById("noteText")
let noteDate = document.getElementById("noteDate")
let saveNoteButton = document.getElementById("saveNote")
let closeNotPageButton = document.getElementById("closeNotePage")
let addedNotes = document.getElementById("addedNotes");
let addNote = document.querySelector(".addNote")

let currentNote = null

addNoteButton.addEventListener("click", function() {
    // Makes the notes page visible
    notePage.style.display = "block" 

    // Creates a new blank note
    currentNote = {
        title: "Enter the header",
        text: "Enter the content",
        date: new Date().toLocaleDateString()
    }

    // Updates the contents on the notes page
    updateNotePage()

})

// When clicking on the title area
noteTitle.addEventListener("click", function() {
    // Clear contents of title area
    if (currentNote) {
        noteTitle.textContent = "";
    }
});

// When clicking on the content area
noteText.addEventListener("click", function() {
    // Clear the contents of the content area
    if (currentNote) {
        noteText.textContent = "";
    }
});


// Saves the note
saveNoteButton.addEventListener("click", function() {
    if (currentNote) {
        // Retrieves changes made by the user
        currentNote.title = noteTitle.textContent
        currentNote.text = noteText.textContent

        // Create a card to save the note
        let noteCard = document.createElement("div")
        noteCard.classList.add("noteCard")
        noteCard.classList.add("custom-note")
        noteCard.style.width = "250px"
        noteCard.style.height = "250px"


        let truncatedText = currentNote.text.slice(0, 100) // Gets the first 100 characters of text
        
        // Contents of the note card
        let cardContent = `
        <div style="display: flex; justify-content: space-between; width: 100%;  flex-direction: column">
            <div style="flex-grow: 1;">
                <h3>${currentNote.title}</h3>
                <p>${truncatedText}</p>
            </div>
            <hr style="margin-top: 90px">
            <div style="display: flex; margin-top: 5px">
                <p style="">${currentNote.date}</p>
                <i class="fa-solid fa-trash" id="deleteNote" style="margin-left: auto; margin-top: 3px"></i>
            </div>
        </div>
        `;

        noteCard.innerHTML = cardContent;

        // Deletes the note
        let deleteNoteButton = noteCard.querySelector("#deleteNote")
        deleteNoteButton.addEventListener("click", function(event) {
            // Removes notecard from list
            addedNotes.removeChild(noteCard)
            // Stops the event from being processed on this page
            event.stopPropagation();
        })

        // Inserts the note card into the added notes div
        addedNotes.appendChild(noteCard)

        // Hides the notes page
        notePage.style.display = "none";

        noteCard.addEventListener("click", function() {
            
            // Makes the notes page visible
            notePage.style.display = "block";
            currentNote = {
                title: title,
                text: text,
            }
        });

        // Updates the contents on the notes page
        updateNotePage();
    }
});

// Closing the notes page
closeNotPageButton.addEventListener("click", function() {
    // Hides the notes page
    notePage.style.display = "none"

})


// Update contents on notes page
function updateNotePage() {
    if (currentNote) {
        noteTitle.textContent = currentNote.title;
        noteText.textContent = currentNote.text;
        noteDate.textContent = currentNote.date;
    } else {
        noteTitle.textContent = "";
        noteText.textContent = "";
        noteDate.textContent = "";
    }
}




