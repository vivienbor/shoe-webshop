import { Outlet } from "react-router";
import { ShoeContextProvider } from "./contexts/ShoesContext";
import AppbarComponent from "./components/AppbarComponent";
import { BagContextProvider } from "./contexts/BagContext";

function App() {
  return (
    <ShoeContextProvider>
      <BagContextProvider>
        <AppbarComponent />
        <Outlet />
      </BagContextProvider>
    </ShoeContextProvider>
  );
}

export default App;
