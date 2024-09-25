import { useState } from 'react';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';

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

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) setItems(savedItems);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h1>Lista de Mercado</h1>
      <AddItem onAdd={handleAddItem} />
      <ItemList items={items} onToggle={handleToggleItem} />
    </div>
  );
}
