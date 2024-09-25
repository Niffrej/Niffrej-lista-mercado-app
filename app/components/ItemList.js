export default function ItemList({ items, onToggle }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          {item.name}
          <button onClick={() => onToggle(index)}>
            {item.completed ? 'Desmarcar' : 'Marcar'}
          </button>
        </li>
      ))}
    </ul>
  );
}
