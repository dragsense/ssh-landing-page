import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayouts";
import Home from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // Add more routes:
      // { path: "/books", element: <Books /> }
    ]
  }
]);
