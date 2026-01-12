import { Outlet } from "react-router";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
