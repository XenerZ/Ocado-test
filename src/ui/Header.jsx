import { Link } from "react-router";
import CartButton from "../cart/CartButton.jsx";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        <h1>Sklep internetowy</h1>
      </Link>
      <CartButton />
    </header>
  );
}
