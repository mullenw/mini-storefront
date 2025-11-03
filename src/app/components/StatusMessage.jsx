'use client';

export default function StatusMessage({ status, products }) {
  if (status === 'loading') {
    return <p className="text-center text-gray-600">Loading products...</p>;
  }

  if (status === 'error') {
    return <p className="text-center text-red-600">Error loading products. Please try again.</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-600">No products match your filters.</p>;
  }

  return null;
}
