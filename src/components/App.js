import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import ItemForm from "./ItemForm";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({ category: "Produce" });

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function onItemFormSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    }
    
    setItems([...items, newItem]);

    return newItem;
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={onItemFormSubmit} setFormData={setFormData} formData={formData} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
