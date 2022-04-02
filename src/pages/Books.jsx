import React, { useState } from "react";
import Book from "../ui/Book";

// if you want to pass in data from an API, you can pass in the data from the API as a parameter to the component. 



const Books = ({ books: initialBooks }) => {

  // this sets the initial state of the books to the initialBooks parameter
  const [books, setBooks] = useState(initialBooks);

  // this function takes in a filter value and filters the books based on the filter value.
  function filterBooks(filter) {
    console.log(filter);

   // if the filter is set to low to high, sort the books by the salePrice property from lowest to highest.
   // each if statement checks if the filter is set to a certain value and then sorts the books based on that value.
   // if the salePrice doesn't exist, it will sort the books based on the originalPrice property.
   // .sort has two parameters, the first is the property to sort by, the second is the order to sort by.
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }

    // if the filter is set to high to low, sort the books by the salePrice property from highest to lowest.
    
    if (filter === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }

    // if the filter is set to most popular, sort the books by the rating property from highest to lowest.
    if (filter === "RATING") {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  // on change takes in the event target value and passes it to the filterBooks function.
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {/* 
                // this renders the book component for each book in the books array.
                */}
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
