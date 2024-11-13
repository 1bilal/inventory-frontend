import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('products/'); // Fetch all products
                setProducts(response.data);
            } catch (error) {
                console.error("Failed to load products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.quantity} units in stock
                        <Link to={`/products/${product.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
