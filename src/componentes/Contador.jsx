import { useState } from "react";

function Contador() {
  // estado inicial en 0
  const [contador, setContador] = useState(0);

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid black" }}>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
