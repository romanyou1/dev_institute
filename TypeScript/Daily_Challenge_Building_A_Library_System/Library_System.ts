interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): string {
    const book = this.books.find((b) => b.isbn === isbn);

    if (!book) {
      return "Book not found.";
    }

    return `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Published Year: ${book.publishedYear}, Genre: ${book.genre ?? "Not specified"}`;
  }

  protected getBooks(): Book[] {
    return this.books;
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.getBooks().map((book) => book.title);
  }
}

// Create an instance of DigitalLibrary
const myLibrary = new DigitalLibrary("https://mylibrary.com");

// Add books
myLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "12345",
  publishedYear: 1949,
  genre: "Dystopian"
});

myLibrary.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "67890",
  publishedYear: 1960
});

myLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "54321",
  publishedYear: 1925,
  genre: "Classic"
});

// Print book details
console.log(myLibrary.getBookDetails("12345"));
console.log(myLibrary.getBookDetails("67890"));
console.log(myLibrary.getBookDetails("54321"));

// Print all book titles
console.log(myLibrary.listBooks());

// Print website
console.log("Website:", myLibrary.website);