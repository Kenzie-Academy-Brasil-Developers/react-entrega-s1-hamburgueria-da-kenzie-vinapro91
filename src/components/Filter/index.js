import { useState } from "react";
import "./Filter.css";
const Filter = ({ products, showProducts, setProducts }) => {
  const [nameInput, setNameInput] = useState("");

  return (
    <div className="div-input">
      Filtro:
      <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
      <button onClick={() => showProducts(nameInput)}>Pesquisar</button>
      <button
        onClick={() =>
          setProducts([
            { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
            { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
            { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
            { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
            { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
            { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
            { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
          ])
        }
      >
        Limpa Filtro
      </button>
    </div>
  );
};
export default Filter;
