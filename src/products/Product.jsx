import Button from "../ui/Button.jsx";
import { useCart } from "../contexts/CartContext.jsx";
import styles from "./Product.module.css";
import { Link, useNavigate } from "react-router";

export default function Product({ product }) {
  const { addToCart } = useCart();
  const { name, price } = product;
  const { main, fractional } = price;
  const navigate = useNavigate();

  function handleProduct() {
    navigate(`/product/${product.id}`);
  }

  return (
    <li className={styles.product}>
      <h2 onClick={() => handleProduct()}>{name}</h2>

      <p className={styles.price}>
        {main}
        <sup>{fractional}</sup>zł
      </p>
      <Button onClick={() => addToCart(product)}>Dodaj do koszyka</Button>
    </li>
  );
}
