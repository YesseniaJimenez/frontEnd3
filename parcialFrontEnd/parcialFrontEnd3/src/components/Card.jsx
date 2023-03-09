//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from "react";
import "../Card.css";

const Card = ({ artist, song }) => {
  return (
    <div className="card">
      <h3>Tu artista favorito es:{artist}</h3>
      <h4>Tu canción favorita es: {song}</h4>
    </div>
  );
};

export default Card;
