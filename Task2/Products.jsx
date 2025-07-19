import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Men’s Casual Shirt',
    price: '1200',
    image: 'https://m.media-amazon.com/images/I/71whS2kWR-L.jpg',
  },
  {
    id: 2,
    name: 'Women’s Ethnic Dress',
    price: '1800',
    image: 'https://juniperfashion.com/cdn/shop/files/P1248Red_2.jpg?v=1752238711&width=2000',
  },
  {
    id: 3,
    name: 'Kid’s Graphic Tee',
    price: '1000',
    image: 'https://ambitiouskids.com/cdn/shop/files/146_600x.png?v=1706474313',
  },
  {
    id: 4,
    name: 'Men’s Jacket',
    price: '1999',
    image: 'https://assets.thenorthface.com/images/t_img/f_auto,h_400,w_344,e_unsharp_mask:150/dpr_2.0/v1723169941/NF0A7ZZ4JK3-HERO/Mens-TNF-Packable-Jacket.png',
  },
  {
    id: 5,
    name: 'Women’s Kurti',
    price: '1450',
    image: 'https://twelvebd.com/cdn/shop/files/RA-KURB-TW25-04EF-78011_5.jpg?v=1747341763&width=533',
  },
  {
    id: 6,
    name: 'Kid’s Hoodie',
    price: '1300',
    image: 'https://pangaia.com/cdn/shop/products/Kids-Organic-Cotton-Hoodie-Black-Model-1.jpg?crop=center&height=1999&v=1724358612&width=1500',
  },
];

const Products = () => {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-indigo-700">Our Products</h2>
        <Link
          to="/cart"
          className="relative bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          🛒 Go to Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-all flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-1 text-center">{product.name}</h3>
            <p className="text-indigo-600 font-bold text-lg mb-3">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

