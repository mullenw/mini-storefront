'use client';
import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2000);
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState('loading');
    useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    }
    fetchData();
  }, []);
    useEffect(() => {
    let data = products;
    if (category !== 'All') {
      data = data.filter((p) => p.category === category);
    }
    data = data.filter((p) => p.price <= maxPrice);
    setFiltered(data);
  }, [category, maxPrice, products]);