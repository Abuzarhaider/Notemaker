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

let displayNote = () => {
    const noteSection = document.querySelector("#section");
    noteSection.innerHTML = "";

    noteData.forEach(note => {
        const article = document.createElement("article");
        article.innerHTML = `<div class="tools">
                                <abbr title="Edit"><img src="./icons/edit.svg" id="editBtn" alt="Edit note"></abbr>
                                <abbr title="Delete"><img src="./icons/trash.svg" id="deleteBtn"  alt="Delete note"></abbr>
                            </div>
                            <h3 class="noteTitle">${note.title}</h3>
                            <p class="noteDescription">${note.description}</p>`;
        section.appendChild(article);



        let deleteBtn = document.querySelector("#deleteAll");
        deleteBtn.addEventListener('click', () => {
            let deleteAll_text = "Do you want to delete all notes permanetly?";
            if (confirm(deleteAll_text) == true) {
                noteData = noteData.filter(e => e != note);
                localStorage.setItem("noteData", JSON.stringify(noteData));
                displayNote();
            }

        })



        // let deleteBtn = () => {
        //     console.log("clicked");
        //     noteData = noteData.filter(t => t != note);
        //     localStorage.setItem("noteData", JSON.stringify(noteData));
        //     displayNote();
        // }
    });
}



// Delete





// let editBtn = null;


// // Create
// let submitData = () => {
//     let data = retrieveData();
//     let localData = storeData(data);
//     console.log(data);

//     // document.querySelector("#title").value = "";
//     // document.querySelector("#description").value = "";

//     insertData(localData);
//     return false;

//     // if(editBtn = null){
//     //     insertData(localData);
//     //     return false;
//     // }
//     // else{
//     //     update();
//     //     return false;
//     // }
// }

// // Create ------> Take data
// let retrieveData = () => {
//     title = document.querySelector("#title").value;
//     decData = document.querySelector("#description").value;
//     arrData = JSON.parse(localStorage.getItem("arrData")) || [];

//     let objData = {
//         title: title,
//         description: decData
//     }

//     arrData.push(objData);
//     localStorage.setItem("arrData", arrData);

//     return arrData;
// }

// // Create ------> Store data in local
// let storeData = (data) => {
//     // let localTitle = localStorage.setItem("localTitle", data[0]);
//     // let localDescription = localStorage.setItem("localDescription", data[1]);

//     let titleGet = data[0].title;
//     let descriptionGet = data[1].description;

//     let arrGet = [titleGet, descriptionGet];

//     return arrGet;
// }

// // Create ------> INSERT
// let insertData = (localData) => {
//     let section = document.getElementById("section");
//     let article = document.createElement("article");

//     article.innerHTML = `<div class="tools">
//                             <abbr title="Edit"><img src="./icons/edit.svg" onclick="editNote(this)" alt="Edit note"></abbr>
//                             <abbr title="Delete"><img src="./icons/trash.svg" onclick="deleteNote(this)" alt="Delete note"></abbr>
//                         </div>
//                         <h3 class="noteTitle">${localData[0]}</h3>
//                         <p class="noteDescription">${localData[1]}</p>`;
//     section.appendChild(article);
// }


// // Edit
// let editNote = (x)=>{
//     editBtn = x.parentElement.parentElement.nextElementSibling;

//     document.getElementById("title").value = editBtn.innerHTML;
//     document.getElementById("description").value = editBtn.nextElementSibling.innerHTML;

//     asideNoteDiv.style.left = "0";
// }


// // Update
// let update = ()=>{
//     editBtn.innerHTML = document.getElementById("title").value;
//     editBtn.nextElementSibling.innerHTML = document.getElementById("description").value;
//     editBtn = null;
// }

// // Delete
// let deleteNote = () => {
//     confirm("Do you want to delete this note?");
// }

// // localStorage.clear();





// aside
let asideNoteDiv = document.querySelector(".asideNoteDiv");
let newNote = () => {
    asideNoteDiv.style.left = "0";
}

let closeNewNote = () => {
    asideNoteDiv.style.left = "-100%";

}

let asideIn = () => {
    asideNoteDiv.style.left = "-100%";
}