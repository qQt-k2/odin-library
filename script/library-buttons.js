import { LibraryUtils } from "./library-functions.js";

const inputTitle = document.getElementById("create-title");
const inputAuthor = document.getElementById("create-author");
const inputPages = document.getElementById("create-pages");
const inputStatus = document.getElementById("create-status");

const addButton = document.getElementById("add-button");
const createButton = document.getElementById("create-button");
const closeButton = document.getElementById("close-button");

const libraryBlock = document.getElementById("library-holder");
const createUIBlock = document.getElementById("create-ui");


addButton.addEventListener("click", () => {
  LibraryUtils.displayAddUI(createUIBlock);
});

createButton.addEventListener("click", () => {
  LibraryUtils.addBook(inputTitle.value, inputAuthor.value, inputPages.value, inputStatus.value);

  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputStatus.value = "";

  LibraryUtils.displayAddUI(createUIBlock);
  LibraryUtils.displayLibrary(libraryBlock);
});

closeButton.addEventListener("click", () => {
  LibraryUtils.displayAddUI(createUIBlock);
});