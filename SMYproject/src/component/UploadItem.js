import React from 'react';
import Item from './Item';

const itemsData = [
  { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'path/to/image2.jpg' },
  // Add more items as needed
];
const Body = () => {
  return (
    <div className="body">
      <h2>Welcome to Our kidos' toys and books Store!</h2>
      <div className="item-list">
        {itemsData.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      {/* Add more components for product listings, categories, etc. */}
    </div>
  );
};

export default Body;
