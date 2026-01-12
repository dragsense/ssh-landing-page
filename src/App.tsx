
import { Routes, Route } from "react-router";
import RootLayout from "@/components/layouts/RootLayouts";
import Home from "@/pages/HomePage";
import EarlyLife from "@/pages/EarlyLifePage";
import AirforceLife from "@/pages/AirforceLifePage";
import BusinessMan from "@/pages/Businessman";
import LifeAtTheAirforcePage from "@/pages/LifeAtTheAirforcePage";
import './App.css'

interface AppProps {
  someProps?: string;
}

function App({ someProps }: AppProps) {
  console.log('Client-side props:', someProps);
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/early-life" element={<EarlyLife />} />
        <Route path="/airforce-life" element={<AirforceLife />} />
        <Route path="/business-man" element={<BusinessMan />} />
        <Route path="/life-at-airforce/:warId" element={<LifeAtTheAirforcePage />} />
      </Route>
    </Routes>
  )
}

export default App
