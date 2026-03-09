const inputTitle = document.getElementById("create-title");
const inputAuthor = document.getElementById("create-author");
const inputPages = document.getElementById("create-pages");
const inputStatus = document.getElementById("create-status");

const addButton = document.getElementById("add-button");
const createButton = document.getElementById("create-button");
const closeButton = document.getElementById("close-button");

addButton.addEventListener("click", () => {
  displayAddUI();
});

createButton.addEventListener("click", () => {
  addBook(inputTitle.value, inputAuthor.value, inputPages.value, inputStatus.value);

  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputStatus.value = "";

  displayAddUI();
  displayLibrary();
});

closeButton.addEventListener("click", () => {
  displayAddUI();
});