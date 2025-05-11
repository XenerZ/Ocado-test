import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../contexts/CartContext.jsx";
import styles from "./CartButton.module.css";

export default function CartButton() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className={styles.cartButton}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span className={styles.productsNumber}>{total}</span>
    </Link>
  );
}
