import { Book } from "./book.js";

export class LibraryUtils {
  static libraryHolder = [];

  static addBook(title, author, pagesCount, readStatus) {
    this.libraryHolder.push(new Book(title, author, pagesCount, readStatus));
  }

  static displayAddUI(createUIBlock) {
    createUIBlock.classList.toggle("hidden");
  }

  static displayLibrary(libraryBlock) {
    libraryBlock.replaceChildren();

    for (const book of this.libraryHolder) {
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

      const cardReadStatus = document.createElement("div");
      cardReadStatus.classList.add("card__read-status");
      cardReadStatus.textContent = `Status: ${book.readStatus || "None"}`;

      const cardRemove = document.createElement("button");
      cardRemove.classList.add("card__button");
      cardRemove.textContent = `Remove`;
      cardRemove.addEventListener("click", () => {
        for (const existingBook of this.libraryHolder) {
          if (existingBook.id === book.id) {
            this.libraryHolder.splice(this.libraryHolder.indexOf(existingBook), 1);
            this.displayLibrary(libraryBlock);
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
}
