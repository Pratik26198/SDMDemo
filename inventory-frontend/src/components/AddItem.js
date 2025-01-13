import React, { useState } from 'react';
import { addItem } from '../localStorageUtils';

const AddItem = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ name, quantity: Number(quantity), price: Number(price) });
        setName('');
        setQuantity(0);
        setPrice(0);
        alert('Item added successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Item</h2>
            <div>
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItem;
