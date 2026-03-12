export class Book {
  #title = "";
  #author = "";
  #pagesCount = "";
  #readStatus = "";
  #id = crypto.randomUUID();

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get pagesCount() {
    return this.#pagesCount;
  }

  get readStatus() {
    return this.#readStatus;
  }

  get id() {
    return this.#id;
  }

  constructor(title, author, pagesCount, readStatus) {
    this.#title = title;
    this.#author = author;
    this.#pagesCount = pagesCount;
    this.#readStatus = readStatus;
  }

  getInfo() {
    return `The book: ${this.#title} by ${this.#author} has ${this.#pagesCount}. Is read: ${this.#readStatus}.`;
  }
}