import styles from "./Cart.module.css";
import CartElement from "./CartElement.jsx";
import { useCart } from "../contexts/CartContext.jsx";
import Button from "../ui/Button.jsx";
import { useNavigate } from "react-router";

export default function Cart() {
  const { cart, addToCart, reduceCart } = useCart();
  const navigate = useNavigate();

  function handlePlaceOrder() {
    navigate("/order-summary");
  }

  function getCost() {
    return cart
      .reduce((total, item) => {
        const itemCost = item.price.main + item.price.fractional / 100;
        return total + itemCost * item.quantity;
      }, 0)
      .toFixed(2);
  }

  return (
    <>
      <div className={styles.cart}>
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <CartElement
              key={item.id}
              inProduct={item}
              addToCart={addToCart}
              reduceCart={reduceCart}
            />
          ))}
        </ul>
      </div>
      <div className={styles.overallCost}>
        <p>Łączny koszt: {getCost()} zł</p>
        <Button onClick={handlePlaceOrder}>Złóż zamówienie</Button>
      </div>
    </>
  );
}
