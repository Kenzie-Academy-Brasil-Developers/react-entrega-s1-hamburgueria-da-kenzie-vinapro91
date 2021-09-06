import Product from "../Product";
import "./Cart.css";
const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <ul>
      {currentSale.map((elemento, index) => (
        <Product key={index} item={elemento} id={elemento.id}></Product>
      ))}
    </ul>
  );
};
export default Cart;
