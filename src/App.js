import React from 'react';
import Navbar from "./components/navbar";
import Highlighted from "./components/highlighted"
import Categories from "./components/categories"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Highlighted />
      <Categories/>
    </div>
  );
}

export default App;
