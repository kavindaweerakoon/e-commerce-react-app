import React from 'react';


// takes in salePrice and originalPrice as props and performs a check. If the salePrice is not null, it will render the salePrice. Else, it will render the originalPrice.


const Price = ({salePrice, originalPrice}) => {
    return (
        <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">${originalPrice.toFixed(2)}</span>$
            {salePrice.toFixed(2)}
          </>
        ) : (
            <>${originalPrice.toFixed(2)}</>
        )}
      </div>
    );
}

export default Price;
