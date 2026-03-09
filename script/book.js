function Book(title, author, pagesCount, readStatus) {
  if(!new.target)
    throw Error("You should use a 'new' keyword.");
  this.title = title;
  this.author = author;
  this.pagesCount = pagesCount;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}

Book.prototype.getInfo = function() {
  return `The book: ${this.title} by ${this.author} has ${this.pagesCount}. Is read: ${this.readStatus}.`;
}
