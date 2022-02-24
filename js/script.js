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
    
        container.innerHTML += `
        <p>${isbn}</p><h4 style="color:${colour}">${title}</h4><button class="btn" data-item="${isbn}">
        ` 
        
        const trashCan = document.querySelectorAll("button");

        trashCan.forEach(function(can) {
            can.addEventListener("click", removeFromList);
        })
}


createList();




function removeFromList(event) {
    const itemToRemove = event.target.dataset.item;

    const newList = books.filter(function(book) {
        return book.isbn = itemToRemove;
    })
    
    console.log(event.target.dataset.item);
    console.log(isbn);
    console.log(newList);
    console.log(itemToRemove);
    
    books = newList;

    createList();

}

}



