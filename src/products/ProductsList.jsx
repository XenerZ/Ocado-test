import { useLoaderData } from "react-router";
import { useCart } from "../contexts/CartContext.jsx";
import Product from "./Product.jsx";
import { getProducts } from "../services/apiProducts.js";
import styles from "./ProductsList.module.css";

export default function ProductsList() {
  const products = useLoaderData();
  const { addToCart } = useCart();

  return (
    <div className={styles.productsContainer}>
      <ul className={styles.productsBox}>
        {products.map((prod) => (
          <Product key={prod.id} product={prod} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  return await getProducts();
}
