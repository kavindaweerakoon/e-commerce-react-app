import React from "react";
import Book from "../ui/Book";

// takes the books array from data.js
import { books } from "../data";

const Featured = () => {

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">

            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                
                <Book book={book} key={book.id} />
                ))}
                {/* Taking all data from books and filtering it to return the highest rated books, takes the top 4 with .slice and renders it with .map by taking each element and passing it to the Book .jsx component as a prop. */}
                {/* It uses the id property from books and passes it to the key property */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
