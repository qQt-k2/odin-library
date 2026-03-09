const libraryHolder = [];
const libraryBlock = document.getElementById("library-holder");
const createUIBlock = document.getElementById("create-ui");

function addBook(title, author, pagesCount, readStatus) {
  libraryHolder.push(new Book(title, author, pagesCount, readStatus));
}

function displayAddUI() {
  createUIBlock.classList.toggle("hidden");
}

function displayLibrary() {
  libraryBlock.replaceChildren();

  for(const book of libraryHolder) {
    const libraryCard = document.createElement("div"); 
    libraryCard.classList.add("library__card");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card__title"); 
    cardTitle.textContent = `${book.title || "None"}`;
    
    const cardAuthor = document.createElement("div"); 
    cardAuthor.classList.add("card__author"); 
    cardAuthor.textContent = `Author: ${book.author || "None"}`;
    
    const cardPagesCount = document.createElement("div"); 
    cardPagesCount.classList.add("card__pages-count"); 
    cardPagesCount.textContent = `Pages: ${book.pagesCount || "0"}`;
    
    const cardReadStatus= document.createElement("div"); 
    cardReadStatus.classList.add("card__read-status"); 
    cardReadStatus.textContent = `Status: ${book.readStatus || "None"}`;

    const cardRemove = document.createElement("button"); 
    cardRemove.classList.add("card__button"); 
    cardRemove.textContent = `Remove`;
    cardRemove.addEventListener("click", () => {
      for(const existingBook of libraryHolder) {
        if(existingBook.id === book.id) {
          libraryHolder.splice(libraryHolder.indexOf(existingBook), 1);
          displayLibrary();
        }
      }
    });

    libraryCard.appendChild(cardTitle);
    libraryCard.appendChild(cardAuthor);
    libraryCard.appendChild(cardPagesCount);
    libraryCard.appendChild(cardReadStatus);
    libraryCard.appendChild(cardRemove);

    libraryBlock.appendChild(libraryCard);
  }
}