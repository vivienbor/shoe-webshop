import { useState } from "react";
import { initialShoes } from "./initialShoes";
import type { Shoe } from "./types/Shoe.type";
import ShoeComponent from "./components/ShoeComponent";

function App() {
  const [shoes, setShoes] = useState<Shoe[]>(initialShoes);

  return (
    <>
      {shoes.map((shoe) => (
        <ShoeComponent shoe={shoe} />
      ))}
    </>
  );
}

export default App;
