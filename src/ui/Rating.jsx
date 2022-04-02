import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// takes in rating as a prop and renders a star icon for each number of stars.

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {
        // creates a star icon for each number of stars and the size of array is determined by the rating prop and the number of stars is determined by the size of the array.
        new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))
      }
      {
        // if the rating prop is not an integer, it will render a half star icon.
        !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />
      }
    </div>
  );
};

export default Rating;
