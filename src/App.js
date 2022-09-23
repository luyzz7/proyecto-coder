import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Diamond Suplements"/>
    </div>
  );
}

export default App;
