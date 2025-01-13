import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../localStorageUtils';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
    }, []);

    const handleDelete = (index) => {
        deleteItem(index);
        setItems(getItems());
    };

    return (
        <div>
            <h2>Inventory List</h2>
            {items.length === 0 ? (
                <p>No items in inventory.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.quantity} pcs - ${item.price}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
