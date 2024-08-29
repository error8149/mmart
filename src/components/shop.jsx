import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  // Sample product data
  
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'https://unsplash.com/photos/164_6wVEHfI',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 29.99,
      image: 'product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 29.99,
      image: 'product4.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 9,
      name: 'Product 9',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 10,
      name: 'Product 10',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 11,
      name: 'Product 11',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 12,
      name: 'Product 12',
      price: 29.99,
      image: 'product2.jpg',
    },
    // Add more products as needed
  ];

  
  const productElements = products.map(product => (
    <div key={product.id} className="product-card bg-white border rounded-lg p-4 shadow-md ">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-32 rounded-md mb-4" />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </Link>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-blue-600">
        Add to Cart
      </div>
    </div>
  ));

  return (
    <div className="container p-6 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productElements}
    </div>
  );
};

export default ProductsList;
