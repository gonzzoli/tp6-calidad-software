import { useState } from "react";
import { Post } from "./Post";

export default function ModalAgregarPost({
  publicarPost,
}: {
  publicarPost: (post: Omit<Post, "usuario" | "id">) => void;
}) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  return (
    <div style={{ background: "white" }}>
      <label htmlFor="titulo">Titulo</label>
      <input
        type="text"
        value={titulo}
        id="input-titulo-post"
        onChange={(e) => setTitulo(e.target.value)}
      />
      <label htmlFor="contenido">Contenido del post</label>
      <textarea id="input-contenido-post" onChange={(e) => setContenido(e.target.value)} />
      <button id="boton-confirmar-post" onClick={() => publicarPost({ titulo, contenido })}>
        Publicar post
      </button>
    </div>
  );
}
