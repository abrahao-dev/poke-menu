import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from "./Categories";
import Footer from "./Components/Footer"; 
import items from "./data";
import logo from "./logo-png.png";
import FloatingWhatsApp from './Components/FloatingWhatsApp';
import BarLoader from "react-spinners/BarLoader";

const allCategories = ["Cardápio", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  const [ menuItems, setMenuItems ] = useState(items);
  const [ activeCategory, setActiveCategory ] = useState("");
  const [ categories, setCategories ] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if(category === "Cardápio") {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      {
        loading ?

        <div className="Loading-component">
          <img src={logo} alt="logo" className="logo" />
        <BarLoader 
        color={'#b7f307'} 
        loading={loading} 
        size={100}
        />
        </div>

        :
    <div className="App">
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Cardápio</h2>
          <div className="underline"></div>
        </div>
        <Categories 
        categories={categories} 
        activeCategory={activeCategory} 
        filterItems={filterItems} 
        />
        <Menu items={menuItems} 
        />
      </section>

      <div className="App">
      <FloatingWhatsApp
      />
      <Footer />
    </div>
  </div>
  }
    </main>
  );
}

export default App;