import React from 'react';
import Navbar from "./components/navbar";
import Highlighted from "./components/highlighted"
import Categories from "./components/categories"
import ItemsPoted from "./components/itemsPosted"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Highlighted />
      <Categories/>
      <ItemsPoted />
    </div>
  );
}

export default App;
