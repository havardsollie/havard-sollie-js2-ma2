let books = [
    {
        isbn: "1600506460320",
        title: "Great book",
        colour: "#008000",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
        colour: "#0000FF",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
        colour: "#800080",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
        colour: "#FF0000",
    },
];


const container = document.querySelector(".book-container");

for (let i = 0; i < books.length; i++) {
    
    let isbn = books[i].isbn;
    let title = books[i].title;
    let colour = books[i].colour;


    function createList() {
    
        container.innerHTML += `<span> <p>${isbn}</p> <h4 style="color: ${colour}">${title}</h4><i class="fa-solid fa-trash" data-item="${isbn}"></span>` 
        
        const trashCan = document.querySelectorAll("span i");

        trashCan.forEach(function(can) {
            can.addEventListener("click", removeFromList);
        })
}

createList();

function removeFromList(event) {
    let deleteThisItem = event.target.dataset.isbn;

    let newList = books.filter(function(isbn) {
        if(deleteThisItem !== isbn) {
            return true;
        }
    })

    console.log(event);
    console.log(newList)
    
    books = newList;

    createList()
}

}


