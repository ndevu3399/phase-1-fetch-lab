function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => renderBooks(books))
    .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  let bookList = document.getElementById("book-list");

  // If the book-list element doesn't exist, create it (for test environment)
  if (!bookList) {
    bookList = document.createElement("ul");
    bookList.id = "book-list";
    document.body.appendChild(bookList);
  }

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", fetchBooks);
