//Aqui deberias agregar los estados y los handlers para los inputs
import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [items, setItems] = useState({
    artist: "",
    song: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      items.artist.length < 3 ||
      items.artist.charAt(0) === " " ||
      items.song.length < 6
    ) {
      setShow(false);
      setErr(true);
    } else {
      setShow(true);
      setErr(false);
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={items.artist}
          onChange={(e) => setItems({ ...items, artist: e.target.value })}
          placeholder="Ingrese su artista favorito"
        ></input>
        <br></br>
        <input
          type="text"
          value={items.song}
          onChange={(e) => setItems({ ...items, song: e.target.value })}
          placeholder="Ingrese su canción favorita"
        ></input>
        <br></br>
        <button>Enviar</button>
      </form>
      {err ? (
        <h3 className="mensaje">
          "Por favor chequea que la información sea correcta"
        </h3>
      ) : null}
      {show && <Card artist={items.artist} song={items.song} />}
    </>
  );
};
export default App;
