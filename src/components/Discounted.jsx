import React from "react";
import { books } from "../data";
import Book from "../ui/Book";

// takes each book from the books array and filters it to return the books with a sale price. It then takes the top 8 books with .slice and renders it with .map by taking each element and passing it to the Book .jsx component as a prop.

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.salePrice)
              .slice(0, 8)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
