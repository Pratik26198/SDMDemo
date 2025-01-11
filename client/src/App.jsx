import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const addItem = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/inventory', { name, quantity });
      setInventory([...inventory, response.data]);
      setName('');
      setQuantity(0);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const updateItem = async (id) => {
    const item = inventory.find((item) => item.id === id);
    const updatedName = prompt('Enter new name:', item.name) || item.name;
    const updatedQuantity = prompt('Enter new quantity:', item.quantity) || item.quantity;

    try {
      const response = await axios.put(`http://localhost:5000/api/inventory/${id}`, {
        name: updatedName,
        quantity: parseInt(updatedQuantity, 10),
      });
      setInventory(
        inventory.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/inventory/${id}`);
      setInventory(inventory.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Inventory Management</h1>
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => updateItem(item.id)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;