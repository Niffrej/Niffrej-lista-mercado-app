import { useState } from 'react';
import AddItem from '../app/components/AddItem';
import ItemList from '../app/components/ItemList';

export default function Home() {
  const [items, setItems] = useState([]);

  const handleAddItem = (name) => {
    const newItem = { name, completed: false };
    setItems([...items, newItem]);
  };

  const handleToggleItem = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Lista de Mercado</h1>
      <AddItem onAdd={handleAddItem} />
      <ItemList items={items} onToggle={handleToggleItem} />
    </div>
  );
}