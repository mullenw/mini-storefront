export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'IPhone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Jordans', price: 120, category: 'Apparel', stock: 10 },
    { id: 'p5', name: 'Table', price: 250, category: 'Furniture', stock: 2 }, 
    { id: 'p6', name: 'T-Shirt', price: 25, category: 'Apparel', stock: 8 },
    { id: 'p7', name: 'airpods', price: 200, category: 'Electronics', stock: 6 },
    { id: 'p8', name: 'Bookshelf', price: 300, category: 'Furniture', stock: 1 }
  ];
  return Response.json(products);
}