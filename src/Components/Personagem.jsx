import React from "react"

function Personagem({ nome, status, foto, onFilhoClick, id}) {


  return (
    <div className="container" onClick={()=>onFilhoClick(id)}>
      <h1>{nome}</h1>
      <img src={foto} alt="foto do personagem" />
      <h3>{status}</h3>
    </div>
  )
}

export default Personagem