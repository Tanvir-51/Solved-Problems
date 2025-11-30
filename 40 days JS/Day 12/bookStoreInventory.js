function addBooks(initialBooks = []) {
  return {
    books: initialBooks,

    checkAvailability(bookName) {
      return this.books.includes(bookName);
    },

    restock(newBook) {
      this.books.push(newBook);
    },
  };
}

let store = addBooks(["The Foundation", "Dune"]);
// console.log(store);
console.log(store.checkAvailability("The Foundation"));
console.log(store.checkAvailability("Harry Potter"));
store.restock("Harry Potter");
console.log(store.checkAvailability("Harry Potter"));
