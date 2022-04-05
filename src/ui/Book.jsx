import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Price from "./Price";
import Rating from "./Rating";



const Book = ({ book }) => {
  // takes in book as a prop and sets it to a variable called book 
  const [img, setImg] = useState();
  // this function sets the img state to the book url 

  const mountedRef = useRef(true)
 // this function sets the mountedRef to true

  useEffect(() => {
    // this function sets the img state to the book url and sets the mountedRef to false if the component is unmounted 
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      if(mountedRef.current) {
        setImg(image);
      }
    };
    
    return () => {
      mountedRef.current = false;
    }
  });

  return (
    <div className="book">
      {/* If the image exists, render the book. Else, render the skeleton. */}
      {img ? (
        <>

          {/* Links to the BookInfo.jsx component with the given id. */}
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img"/>
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          {/*  Takes the rating property from the book prop and passes it to the Rating .jsx component for rendering. */}
          <div className="book__ratings">
            <Rating rating={book.rating} />
          </div>

          {/*  Takes the salePrice and originalPrice property from the book prop and passes it to the Price .jsx component for rendering. */}
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
