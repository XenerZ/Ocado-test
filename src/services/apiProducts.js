const API_URL_PROD = "http://localhost:8002/products";
const API_URL_ORDER = "http://localhost:8002/order";

export async function getProducts() {
  const res = await fetch(`${API_URL_PROD}`);

  if (!res.ok) throw new Error("Failed getting products");

  const data = await res.json();
  return data;
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL_PROD}/${id}`);

  if (!res.ok) throw new Error("Failed getting product");

  const data = await res.json();

  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL_ORDER}`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorDetails = await res.text();
      console.error("API Error Details:", errorDetails);
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to create order:", error);
    throw new Error("Failed adding product to cart");
  }
}
