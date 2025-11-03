'use client';

export default function PriceFilter({ maxPrice, setMaxPrice }) {
  return (
    <div>
      <label htmlFor="priceRange" className="mr-2 font-medium">
        Max Price:
      </label>
      <input
        id="priceRange"
        type="range"
        min="0"
        max="2000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="align-middle"
      />
      <span className="ml-2">${maxPrice}</span>
    </div>
  );
}
