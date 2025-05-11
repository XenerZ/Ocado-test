import Button from "../ui/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartElement.module.css";
import { useCart } from "../contexts/CartContext.jsx";

export default function CartElement({ inProduct }) {
  const { addToCart, reduceCart } = useCart();
  const { name, price, quantity } = inProduct;
  const cost = ((price.main + price.fractional / 100) * quantity).toFixed(2);

  return (
    <li className={styles.listElement}>
      <div className={styles.productCart}>
        <p>{name}</p>
        <div className={styles.quantity}>
          Ilość:{" "}
          <Button onClick={() => reduceCart(inProduct)}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>{" "}
          {quantity}
          <Button onClick={() => addToCart(inProduct)}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
        <p>Cena {cost}</p>
      </div>
    </li>
  );
}
