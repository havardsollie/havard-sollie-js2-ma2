import books from "./data/bookList.js";

let container = document.querySelector(".book-container");

for (let i = 0; i < books.length; i++) {
    
    let isbn = books[i].isbn;
    let title = books[i].title;
    let colour = books[i].colour;
    let id = books[i].id;


    function createList() {
    
        container.innerHTML += `<span> <p>${isbn}</p> <h4 style="color: ${colour}">${title}</h4><i class="fa-solid fa-trash" data-item="${id}"></span>` 
        
        const trashCan = document.querySelectorAll("span i");

        trashCan.forEach(function(can) {
            can.addEventListener("click", removeFromList);
        })
}

createList();

function removeFromList(event) {
    let deleteThisItem = event.target.dataset.id;

    let newList = books.filter(function(id) {
        if(deleteThisItem !== id) {
            return true;
        }
    })
    
    books = newList;

    createList()
}

}
