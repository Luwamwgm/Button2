import React from 'react';

const Item = ({ id, name, price, imageUrl }) => {
  return (
    <div className="item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      {/* Add buttons or actions for adding to cart, etc. */}
    </div>
  );
};

export default Item;
