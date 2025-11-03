'use client';

export default function CategoryFilter({ category, setCategory }) {
  return (
    <div>
      <label htmlFor="category" className="mr-2 font-medium">
        Category:
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Apparel">Apparel</option>
      </select>
    </div>
  );
}