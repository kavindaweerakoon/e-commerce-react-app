import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Book from "../ui/Book";
import Price from "../ui/Price";
import Rating from "../ui/Rating";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();

  // this function takes in a book and returns the book with the given id
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    // function that adds the book to the cart 
    addToCart(book);
  }

  function bookExistsOnCart() {
    // function that checks if the book exists on the cart and returns true or false by comparing the book id to the cart id in the cart array that is passed in as a prop.
    return (cart.find(book => book.id === +id))
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title"> {book.title} </h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil cumque ipsum similique eos autem voluptatum fugiat,
                    libero repellat veritatis perferendis, odio laboriosam?
                    Deleniti, voluptatibus. Obcaecati mollitia dolore nisi
                    consectetur nulla!
                  </p>
                  <p className="book__summary__para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil cumque ipsum similique eos autem voluptatum fugiat,
                    libero repellat veritatis perferendis, odio laboriosam?
                    Deleniti, voluptatibus. Obcaecati mollitia dolore nisi
                    consectetur nulla!
                  </p>
                </div>
                
                {
                // if the book exists on the cart, render the checkout button. Else, render the add button.
                bookExistsOnCart() ? (
                  <Link to={"/cart"} className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (

                  // adds the book to the cart by calling the addBookToCart function and passing the book as a parameter.
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
