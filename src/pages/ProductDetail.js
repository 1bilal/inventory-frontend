import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`products/${id}/`);
                setProduct(response.data);
                setQuantity(response.data.quantity);  // Set initial quantity
            } catch (error) {
                console.error("Failed to load product details:", error);
            }
        };
        fetchProduct();
    }, [id]);

    const updateQuantity = async () => {
        try {
            await api.patch(`products/${id}/`, { quantity });
            alert('Quantity updated successfully');
        } catch (error) {
            alert('Failed to update quantity');
        }
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Description: {product.description}</p>
            <p>Current Stock: {quantity}</p>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={updateQuantity}>Update Quantity</button>
        </div>
    );
};

export default ProductDetail;
