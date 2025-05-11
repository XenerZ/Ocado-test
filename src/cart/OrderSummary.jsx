import { useCart } from "../contexts/CartContext";
import { Link } from "react-router";
import { createOrder } from "../services/apiProducts";
import styles from "./OrderSummary.module.css";

export default function OrderSummary() {
  const { cart, clearCart } = useCart();

  async function placeOrder() {
    try {
      const order = {
        id: new Date(),
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        totalCost: getTotalCost(),
      };

      await createOrder(order);
      clearCart(); // Czyści koszyk
      window.location.href = "/order-confirmation.html";
    } catch (error) {
      console.error("Błąd podczas składania zamówienia:", error);
    }
  }

  function getTotalCost() {
    return cart
      .reduce((total, item) => {
        const itemCost = item.price.main + item.price.fractional / 100;
        return total + itemCost * item.quantity;
      }, 0)
      .toFixed(2);
  }

  return (
    <div className={styles.orderSummary}>
      <h1>Podsumowanie Zamówienia</h1>
      <ul className={styles.orderList}>
        {cart.map((item) => (
          <li key={item.id} className={styles.orderItem}>
            <p>Nazwa: {item.name}</p>
            <p>Ilość: {item.quantity}</p>
            <p>
              Cena jednostkowa: {item.price.main},{item.price.fractional} zł
            </p>
            <p>
              Suma częściowa:{" "}
              {(item.price.main + item.price.fractional / 100) * item.quantity}{" "}
              zł
            </p>
          </li>
        ))}
      </ul>
      <h2>Łączny koszt: {getTotalCost()} zł</h2>
      <div className={styles.actions}>
        <Link to='/cart'>Powrót do koszyka</Link>
        <button onClick={placeOrder}>Złóż Zamówienie</button>
      </div>
    </div>
  );
}
