function Personagem({ nome, status, foto}) {


  return (
    <div className="container">
      <h1>{nome}</h1>
      <img src={foto} alt="foto do personagem" />
      <h3>{status}</h3>
    </div>
  )
}

export default Personagem