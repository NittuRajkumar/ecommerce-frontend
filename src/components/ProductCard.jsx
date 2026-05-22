import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

/**
 * ProductCard Component
 * Displays individual product with add to cart functionality
 */
const ProductCard = ({ product, onEdit, onDelete, isAdmin = false }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
        {product.stock <= 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Stock */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm bg-gray-200 px-2 py-1 rounded">
            {product.stock} in stock
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          {!isAdmin ? (
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0 || isAdding}
              className={`flex-1 py-2 rounded font-semibold transition ${
                isAdding
                  ? 'bg-green-500 text-white'
                  : product.stock <= 0
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isAdding ? '✓ Added' : 'Add to Cart'}
            </button>
          ) : (
            <>
              <button
                onClick={() => onEdit(product)}
                className="flex-1 py-2 bg-yellow-500 text-white rounded font-semibold hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product._id)}
                className="flex-1 py-2 bg-red-500 text-white rounded font-semibold hover:bg-red-600 transition"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
