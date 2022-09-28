import logo from './logo.svg';
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from "./data";
import logo from "./logo.jpg";
import './App.css';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];


function App() {
  const [ menuItems, setMenuItems ] = useState(items);
  const [ activeCategory, setActiveCategory ] = useState("");
  const [ categories, setCategories ] = useState()
  return (
    <div>
      <h2>Poke Menu App</h2>
    </div>
  );
}

export default App;