import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (input) => {
    const filterProduct = products.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    input !== "" && setProducts([...filterProduct]);
  };

  const handleClick = (productId) => {
    const filterProduct = products.filter(
      (elemento) => elemento.id === productId
    );
    const [arrProd] = filterProduct;

    !currentSale.includes(arrProd) && setCurrentSale([...currentSale, arrProd]);
  };

  const valorTotal = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);
  return (
    <div className="App">
      <Filter
        products={products}
        showProducts={showProducts}
        setProducts={setProducts}
      />
      <MenuContainer handleClick={handleClick} products={products} />
      <div className="subtotal"> Subtotal: R$: {valorTotal.toFixed(2)}</div>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </div>
  );
}

export default App;
