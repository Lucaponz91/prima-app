// import Componente1 from "./Componente1";
// import Prodotto from "./Product";

function App() {
  return (
    <div className="App">
      <h2>Prima React Card</h2>
      <section className="card-section">
        <Prodotto />
        <Prodotto />
        <Prodotto />
        <Prodotto />
        <Prodotto />
      </section>
      {/* <Componente1 /> */}
    </div>
  );
}

const Prodotto = () => {
  const img =
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Standard_razza_chihuahua.jpg";
  const alt = "img_chihuahua";
  const prezzo = 14.0;
  return (
    <article>
      <div className="card">
        <img src={img} alt={`${alt}`} />
        <h5>Chihuahua di Razza</h5>
        <button>{prezzo} €</button>
        <p className="card_time">PRESTO</p>
      </div>
    </article>
  );
};

export default App;
