import { Outlet } from "react-router";
import Header from "./Header.jsx";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
