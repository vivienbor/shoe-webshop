import { Outlet, ScrollRestoration } from "react-router";
import { ShoeContextProvider } from "./contexts/ShoesContext";
import AppbarComponent from "./components/AppbarComponent";
import { BagContextProvider } from "./contexts/BagContext";
import { FooterComponent } from "./components/FooterComponent";
import { CommercialComponent } from "./components/CommercialComponent";

function App() {
  return (
    <ShoeContextProvider>
      <BagContextProvider>
        <AppbarComponent />
        <CommercialComponent />
        <Outlet />
        <FooterComponent />
        <ScrollRestoration />
      </BagContextProvider>
    </ShoeContextProvider>
  );
}

export default App;
