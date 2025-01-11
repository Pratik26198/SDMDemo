const INVENTORY_KEY = "inventory";

// Fetch items from local storage
export const getItems = () => {
    const data = localStorage.getItem(INVENTORY_KEY);
    return data ? JSON.parse(data) : [];
};

// Add an item to local storage
export const addItem = (item) => {
    const items = getItems();
    items.push(item);
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
};

// Delete an item by index
export const deleteItem = (index) => {
    const items = getItems();
    items.splice(index, 1);
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
};

// Update an item by index
export const updateItem = (index, updatedItem) => {
    const items = getItems();
    items[index] = updatedItem;
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
};
