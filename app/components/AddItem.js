import { useState } from 'react';

export default function AddItem({ onAdd }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      onAdd(itemName);
      setItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Novo item"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

