function Saludo ({nombre}){
  return (
    <h1>Hola {nombre}</h1>
  )
}
function Presentacion ({nombre, edad, profesion}){
  return (
    <h1>Hola! Soy {nombre}, tengo {edad} y trabajo como {profesion}</h1>
  )
}

function App() {
  return (
    <div>
      <Saludo nombre="Alejo"></Saludo>
      <Presentacion nombre="Alejo" edad={24} profesion= "estudiante"></Presentacion>
    </div>
  );
}

export default App;