import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import ProductsList, {
  loader as productsLoader,
} from "./products/ProductsList.jsx";
import Cart from "./cart/Cart.jsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import ProductPage from "./products/ProductPage.jsx";
import OrderSummary from "./cart/OrderSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <ProductsList />, loader: productsLoader },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order-summary",
        element: <OrderSummary />,
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
