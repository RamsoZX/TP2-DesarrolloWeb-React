function TarjetaDePerfil({ usuario }) {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid black" }}>
      <h2>{usuario.nombre}</h2>
      <p>Profesión: {usuario.profesion}</p>
      <p>Edad: {usuario.edad}</p>

      {usuario.edad >= 18 ? (
        <p style={{ color: "green" }}>Eres mayor de edad ✅</p>
      ) : (
        <p style={{ color: "red" }}>Eres menor de edad ❌</p>
      )}
    </div>
  );
}

export default TarjetaDePerfil;
