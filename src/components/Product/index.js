import "./products.css";
const Product = ({ item, handleClick, id, btnOn }) => {
  return (
    <>
      <li className="li-products" key={id}>
        <h3>{item.name}</h3>
        <p>Categoria: {item.category}</p>
        <p>R${item.price}</p>
        {btnOn && (
          <button onClick={() => handleClick(item.id)}>adicionar</button>
        )}
      </li>
    </>
  );
};
export default Product;
