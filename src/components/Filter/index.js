import { useState } from "react";
import "./Filter.css";
const Filter = ({ products, filteredProducts, setFilteredProducts }) => {
  const [nameInput, setNameInput] = useState("");

  return (
    <div className="div-input">
      <input onChange={(e) => setNameInput(e.target.value)} />
      <button>Pesquisar</button>
    </div>
  );
};
export default Filter;
