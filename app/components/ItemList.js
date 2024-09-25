import { useState } from 'react';

export default function ItemList({ items, onToggle, onRemove, onEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [newName, setNewName] = useState('');

  const handleEditClick = (index, currentName) => {
    setEditIndex(index);
    setNewName(currentName); // Inicializa o campo de edição com o nome atual do item
  };

  const handleSaveClick = (index) => {
    onEdit(index, newName); // Chama a função onEdit para salvar o novo nome
    setEditIndex(null); // Encerra o modo de edição
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {editIndex === index ? (
            <input 
              type="text" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
            />
          ) : (
            <span 
              style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
              onClick={() => onToggle(index)}
            >
              {item.name}
            </span>
          )}

          <button onClick={() => onToggle(index)}>
            {item.completed ? 'Desmarcar' : 'Comprado'}
          </button>

          <button onClick={() => onRemove(index)}>Remover</button>

          {editIndex === index ? (
            <button onClick={() => handleSaveClick(index)}>Salvar</button>
          ) : (
            <button onClick={() => handleEditClick(index, item.name)}>Editar</button>
          )}
        </li>
      ))}
    </ul>
  );
}
