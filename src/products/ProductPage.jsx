import { useParams } from "react-router";
import { getProduct } from "../services/apiProducts";
import { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import Button from "../ui/Button";
import { useCart } from "../contexts/CartContext";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { main, fractional } = product.price || {};

  useEffect(() => {
    async function product() {
      setProduct(await getProduct(productId));
    }
    product();
  }, [productId]);

  return (
    <div className={styles.productPage}>
      <h2>{product.name}</h2>
      <p>
        {main}
        <sup>{fractional}</sup>zł
      </p>
      <Button onClick={() => addToCart(product)}>Dodaj do koszyka</Button>
    </div>
  );
}

export default ProductPage;
