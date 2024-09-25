import { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    onAdd(newItem);
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input 
        type="text" 
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Adicionar item"
        className="border rounded p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Adicionar</button>
    </form>
  );  
};

export default AddItem;
