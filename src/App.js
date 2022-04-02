import "./index.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {

  // this is the state of the cart that will be used to display the cart 
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    // this function adds a book to the cart by setting the cart state to the current cart plus the book quantity plus 1
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
  // this function changes the quantity of a book in the cart by checking if the book is already in the cart and if so, changing the quantity property of the book in the cart, else adding the book to the cart
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    // if the book id is the same as the item id, remove the item with filter and set the cart to the new array
    setCart(cart.filter((book) => book.id !== item.id));
    console.log("removeItem", item);
  }
  
  
  function numberItems() {
    // this function will return the total number of items in the cart by adding up the quantity of each book in the cart and returning the total number of items in the cart.
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }
 
  
  useEffect(() => {
    
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        {/* // navbar */}
        <Nav numberItems={numberItems()} />
        {/* // routes */}
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} /> 
        {/* 
        // this is the route for the book info page, it will render the book info page with the book info passed in as a prop
         */}
        <Route
          path="/books/:id"
          render={() => (
            
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (

            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        {/* // footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
