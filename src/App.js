import Titulo from "./componentes/Titulo";
import TarjetaDePerfil from "./componentes/TarjetaDePerfil";
import Contador from "./componentes/Contador";
import ListaHobbies from "./componentes/ListaHobbies";

function App() {
  const usuario = {
    nombre: "Omar Villagrán",
    profesion: "Estudiante de Analista de Sistemas",
    edad: 36
  };

  const hobbies = ["Programar", "Gaming", "Música"];

  return (
    <div>
      <Titulo />
      <TarjetaDePerfil usuario={usuario} />
      <Contador />
      <ListaHobbies hobbies={hobbies} />
    </div>
  );
}

export default App;
