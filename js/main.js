// CRUD OPERATIONS


let editBtn = null;


// Create
let submitData = () => {
    let data = retrieveData();
    let localData = storeData(data);

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";

    insertData(localData);
    return false;

    // if(editBtn = null){
    //     insertData(localData);
    //     return false;
    // }
    // else{
    //     update();
    //     return false;
    // }
}

// Create ------> Take data
let retrieveData = () => {
    let title = document.querySelector("#title").value;
    let decData = document.querySelector("#description").value;
    let arrData = [title, decData];

    return arrData;
}

// Create ------> Store data in local
let storeData = (data) => {
    let localTitle = localStorage.setItem("localTitle", data[0]);
    let localDescription = localStorage.setItem("localDescription", data[1]);

    let titleGet = localStorage.getItem("localTitle", localTitle);
    let descriptionGet = localStorage.getItem("localDescription", localDescription);

    let arrGet = [titleGet, descriptionGet];

    return arrGet;
}

// Create ------> INSERT
let insertData = (localData) => {
    let section = document.getElementById("section");
    let article = document.createElement("article");

    article.innerHTML = `<div class="tools">
                            <abbr title="Edit"><img src="./icons/edit.svg" onclick="editNote(this)" alt="Edit note"></abbr>
                            <abbr title="Delete"><img src="./icons/trash.svg" onclick="deleteNote(this)" alt="Delete note"></abbr>
                        </div>
                        <h3 class="noteTitle">${localData[0]}</h3>
                        <p class="noteDescription">${localData[1]}</p>`;
    section.appendChild(article);
}


// Edit
let editNote = (x)=>{
    editBtn = x.parentElement.parentElement.nextElementSibling;

    document.getElementById("title").value = editBtn.innerHTML;
    document.getElementById("description").value = editBtn.nextElementSibling.innerHTML;
    
    asideNoteDiv.style.left = "0";
}


// Update
let update = ()=>{
    editBtn.innerHTML = document.getElementById("title").value;
    editBtn.nextElementSibling.innerHTML = document.getElementById("description").value;
    editBtn = null;
}

// Delete
let deleteNote = () => {
    confirm("Do you want to delete this note?");
}

// localStorage.clear();





// aside
let asideNoteDiv = document.querySelector(".asideNoteDiv");
let newNote = () => {
    asideNoteDiv.style.left = "0";
}

let closeNewNote = () => {
    asideNoteDiv.style.left = "-100%";

}

let asideIn = ()=>{
    asideNoteDiv.style.left = "-100%";
}