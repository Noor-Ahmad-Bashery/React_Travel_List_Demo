import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Status from "./Status";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list."
    );
    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        clearList={clearList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Status items={items} />
    </div>
  );
}
