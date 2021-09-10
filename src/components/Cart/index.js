import Product from "../Product";
import "./Cart.css";
const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <div className="Carrinho">
      <h3> Meu Carrinho</h3>
      <ul>
        {currentSale.map((elemento, index) => (
          <Product key={index} item={elemento} id={elemento.id}></Product>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
