import RootLayout from "@/components/layouts/RootLayouts";
import Home from "@/pages/HomePage";
import EarlyLife from "@/pages/EarlyLifePage";
import AirforceLife from "@/pages/AirforceLifePage";
import BusinessMan from "@/pages/Businessman";
import LifeAtTheAirforcePage from "@/pages/LifeAtTheAirforcePage";

// Static routes configuration - can be used by both client and server
export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/early-life", element: <EarlyLife /> },
      { path: "/airforce-life", element: <AirforceLife /> },
      { path: "/business-man", element: <BusinessMan /> },
      { path: "/life-at-airforce/:warId", element: <LifeAtTheAirforcePage /> }
    ]
  }
];
