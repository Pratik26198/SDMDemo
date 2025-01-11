const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store
let inventory = [
  { id: 1, name: 'Item A', quantity: 10 },
  { id: 2, name: 'Item B', quantity: 5 },
];

// Routes
app.get('/api/inventory', (req, res) => {
  res.json(inventory);
});

app.post('/api/inventory', (req, res) => {
  const { name, quantity } = req.body;
  const newItem = { id: inventory.length + 1, name, quantity };
  inventory.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const itemIndex = inventory.findIndex((item) => item.id == id);
  if (itemIndex !== -1) {
    inventory[itemIndex] = { id: parseInt(id), name, quantity };
    res.json(inventory[itemIndex]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.delete('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  inventory = inventory.filter((item) => item.id != id);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
