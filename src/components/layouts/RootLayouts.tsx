import { Outlet } from "react-router";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
