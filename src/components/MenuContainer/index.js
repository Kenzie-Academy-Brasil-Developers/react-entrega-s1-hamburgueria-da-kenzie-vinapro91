import Product from "../Product";
import "./MenuContainer.css";
const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className="MenuContainer">
      <ul>
        {products.map((elemento, index) => (
          <Product
            key={index}
            item={elemento}
            id={elemento.id}
            handleClick={() => handleClick(elemento.id)}
            btnOn={true}
          ></Product>
        ))}
      </ul>
    </div>
  );
};
export default MenuContainer;
