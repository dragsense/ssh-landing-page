import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayouts";
import Home from "@/pages/HomePage";
import EarlyLife from "@/pages/EarlyLifePage";
import WarLife from "@/pages/WarLifePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/early-life", element: <EarlyLife /> },
       { path: "/war-life", element: <WarLife /> }
    ]
  }
]);
