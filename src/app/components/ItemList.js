const ItemList = ({ items, onToggle }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          <span onClick={() => onToggle(index)}>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
