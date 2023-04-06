// CRUD OPERATIONS

window.addEventListener("load", () => {
    noteData = JSON.parse(localStorage.getItem("noteData")) || [];
    const noteForm = document.querySelector("#noteForm");

    noteForm.addEventListener('submit', e => {
        e.preventDefault();

        const note = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            time: new Date().getTime()
        }

        noteData.push(note);
        localStorage.setItem("noteData", JSON.stringify(noteData));
        e.target.reset();
        displayNote();

    })

    displayNote();
})



/**********
    DISPLAY
************/
let displayNote = () => {
    const noteSection = document.querySelector("#section");
    noteSection.innerHTML = "";

    noteData.forEach(note => {
        const article = document.createElement("article");
        article.innerHTML = `<div class="tools">
                                <abbr title="Edit"><img src="./icons/edit.svg" id="editBtn" onclick="editNote('${note.title}', '${note.description}')" alt="Edit note"></abbr>
                                <abbr title="Delete"><img src="./icons/trash.svg" id="deleteBtn" onclick="deleteNote('${note.title}')"  alt="Delete note"></abbr>
                            </div>
                            <h3 class="noteTitle">${note.title}</h3>
                            <p class="noteDescription">${note.description}</p>`;
        section.appendChild(article);
    });
}



/**************
    DELETE ALL
***************/
let deleteAll = document.querySelector("#deleteAll");
deleteAll.addEventListener('click', () => {

    if ("noteData" in localStorage === false) {
        alert("No Note Found")
    }
    else {
        let deleteAlert = confirm("All notes will be deleted");
        if (deleteAlert) {
            localStorage.clear();
            window.location.reload();
        }
    }
})



/**********
    EDIT
**********/
let editNote = (titleEdit, descEdit) => {

    asideNoteDiv.style.left = "0";
    document.getElementById("title").value = titleEdit;
    document.getElementById("description").value = descEdit;

    let indexing = noteData.findIndex(x => x.title === titleEdit);

    if (indexing > -1) {
        noteData.splice(indexing, 1);
    }

    localStorage.setItem("noteData", JSON.stringify(noteData));
    displayNote();


}



/*****************
    DELETE SINGLE
******************/
let deleteNote = (titleEdit) => {

    if (confirm("This note will be deleted.")) {
        let indexing = noteData.findIndex(x => x.title === titleEdit);

        if (indexing > -1) {
            noteData.splice(indexing, 1);
            displayNote();
        }

        localStorage.setItem("noteData", JSON.stringify(noteData));
    }
}




/*********
    Aside
**********/
let asideNoteDiv = document.querySelector(".asideNoteDiv");

// show sideBar onclick plusSign(+)
let newNote = () => {
    asideNoteDiv.classList.toggle("active");
}

// close sideBar onclick cross(x)
let closeNewNote = () => {
    asideNoteDiv.classList.remove("active");
}

// hide sideBar onclick body
document.onclick = (e) => {
    let unique = e.target.getAttribute('name');
    console.log(unique);
    console.log(typeof unique)

    if (unique !== "unique") {
        asideNoteDiv.classList.remove("active");
    }
}

// hide sideBar when form filled
let asideIn = () => {
    let titleInput = document.querySelector("#title");
    let descriptionInput = document.querySelector("#description")

    if (titleInput.value != "" && descriptionInput.value != "")
        asideNoteDiv.classList.remove("active");
}