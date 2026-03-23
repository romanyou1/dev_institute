var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookDetails = function (isbn) {
        var _a;
        var book = this.books.find(function (b) { return b.isbn === isbn; });
        if (!book) {
            return "Book not found.";
        }
        return "Title: ".concat(book.title, ", Author: ").concat(book.author, ", ISBN: ").concat(book.isbn, ", Published Year: ").concat(book.publishedYear, ", Genre: ").concat((_a = book.genre) !== null && _a !== void 0 ? _a : "Not specified");
    };
    Library.prototype.getBooks = function () {
        return this.books;
    };
    return Library;
}());
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        return this.getBooks().map(function (book) { return book.title; });
    };
    return DigitalLibrary;
}(Library));
// Create an instance of DigitalLibrary
var myLibrary = new DigitalLibrary("https://mylibrary.com");
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
