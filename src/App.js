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

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = () => {};
  const handleClick = (productId) => {
    const filterProduct = products.filter(
      (elemento) => elemento.id === productId
    );
    const [arrProd] = filterProduct;
    setCurrentSale([...currentSale, arrProd]);
    total();
    console.log(currentSale);
    console.log();
  };
  const total = () => {
    const valorTotal = currentSale.reduce((valorAnterior, valorAtual) => {
      return valorAtual.price + valorAnterior;
    }, 0);
    console.log(valorTotal);
    setCartTotal(valorTotal);
  };
  return (
    <div className="App">
      <Filter />
      <MenuContainer handleClick={handleClick} products={products} />
      <div> Subtotal: {cartTotal}</div>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </div>
  );
}

export default App;
