function ListaHobbies({ hobbies }) {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid black" }}>
      <h2>Mis Hobbies</h2>
      <ul>
        {hobbies.map((hobbie, index) => (
          <li key={index}>{hobbie}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaHobbies;
