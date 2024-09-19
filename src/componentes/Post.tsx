export type Post = {
  usuario: string;
  contenido: string;
  titulo: string;
};

export default function Post({ titulo, contenido, usuario }: Post) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <em>Publicado por: {usuario}</em>
    </div>
  );
}
