'use client';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-white">
      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-500 mb-1">{product.category}</p>
      <p className="font-bold text-blue-600 mb-1">${product.price}</p>
      <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
      </p>
            <button
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}