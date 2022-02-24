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

const container = document.querySelector("ul");

function createList() {
    for (let i = 0; i < books.length; i++) {
      let isbn = books[i].isbn;
      let title = books[i].title;
      let colour = books[i].colour;
      container.innerHTML += `<li>
          <p>ISBN: ${isbn}</p><h4 style="color:${colour}">${title}</h4><button class="btn" data-item="${isbn}">Remove me
          </li>` 
    }

    const trashCan = document.querySelectorAll("button");

    trashCan.forEach(function(can) {
        can.addEventListener("click", removeFromList);
    })
  }

createList();



function removeFromList(event) {
    const itemToRemove = event.target.dataset.item;
    container.innerHTML = "";

    const newList = books.filter(function(book) {
        return book.isbn !== itemToRemove;
    })

    if (newList.length === 0) {
        container.innerHTML = `<div class="empty"><p>No more books in this list!</p></div>`
    }1
    
    books = newList;

    createList(newList);

}




