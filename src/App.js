import React, { useState, useEffect, useMemo } from 'react';
import Menu from './Menu';
import Categories from "./Categories";
import Footer from "./Components/Footer"; 
import items from "./data";
import logo from "./logo-png.png";
import FloatingWhatsApp from './Components/FloatingWhatsApp';
import BarLoader from "react-spinners/BarLoader";

// Move this outside the component to avoid recalculation on each render
const allCategories = ["Cardápio", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("Cardápio");
  
  // Use useMemo to avoid unnecessary recalculations
  const categories = useMemo(() => allCategories, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const filterItems = (category) => {
    setActiveCategory(category);
    setMenuItems(category === "Cardápio" ? items : items.filter((item) => item.category === category));
  };

  if (loading) {
    return (
      <div className="Loading-component">
        <img src={logo} alt="logo" className="logo" />
        <BarLoader color={'#b7f307'} loading={loading} size={100} />
      </div>
    );
  }

  return (
    <main>
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
          <Menu items={menuItems} />
        </section>

        <FloatingWhatsApp />
        <Footer />
      </div>
    </main>
  );
};

export default App;