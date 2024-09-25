"use client";  // Diretiva para indicar que este é um componente de cliente

import { useState, useEffect } from 'react';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

export default function Home() {
  const [items, setItems] = useState([]);
  const [filter] = useState('all');

  // Filtrar os itens com base no estado atual do filtro
  const filteredItems = items.filter(item => {
    if (filter === 'completed') return item.completed;
    if (filter === 'incomplete') return !item.completed;
    return true; // Retorna todos os itens quando o filtro é 'all'
  });

  // Adiciona um novo item à lista
  const handleAddItem = (name) => {
    setItems(prevItems => [...prevItems, { name, completed: false }]);
  };

  // Alterna o estado de 'completed' de um item
  const handleToggleItem = (index) => {
    setItems(prevItems => 
      prevItems.map((item, i) => 
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Remove um item da lista
  const handleRemoveItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  // Edita o nome de um item da lista
  const handleEditItem = (index, newName) => {
    setItems(prevItems => 
      prevItems.map((item, i) => 
        i === index ? { ...item, name: newName } : item
      )
    );
  };

  // Carrega itens salvos no localStorage ao carregar a página
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) setItems(savedItems);
  }, []);

  // Salva os itens no localStorage sempre que a lista é atualizada
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h1>Lista de Mercado</h1>
      
      {/* Adicionar item */}
      <AddItem onAdd={handleAddItem} />

      {/* Lista de itens com funcionalidades de editar, remover e alternar status */}
      <ItemList 
        items={filteredItems} 
        onToggle={handleToggleItem} 
        onRemove={handleRemoveItem}
        onEdit={handleEditItem}
      />
    </div>
  );
}
