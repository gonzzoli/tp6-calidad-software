import { useState } from "react";
import { Post } from "./Post";

export default function ModalAgregarPost({
  publicarPost,
}: {
  publicarPost: (post: Omit<Post, "usuario">) => void;
}) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  return (
    <div style={{background: "white"}}>
      <label htmlFor="titulo">Titulo</label>
      <input type="text" value={titulo} id="titulo" onChange={(e) => setTitulo(e.target.value)} />
      <label htmlFor="contenido">Contenido del post</label>
      <textarea id="contenido" onChange={(e) => setContenido(e.target.value)} />
      <button onClick={() => publicarPost({ titulo, contenido })}>Publicar post</button>
    </div>
  );
}
