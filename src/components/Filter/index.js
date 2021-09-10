import { useState } from "react";
import "./Filter.css";
const Filter = ({ products, showProducts, setProducts }) => {
  const [nameInput, setNameInput] = useState("");

  return (
    <div className="div-input">
      Filtro:
      <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
      <button onClick={() => showProducts(nameInput)}>Pesquisar</button>
    </div>
  );
};
export default Filter;
