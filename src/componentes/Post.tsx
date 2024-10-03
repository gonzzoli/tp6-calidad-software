export type Post = {
  id: number;
  usuario: string;
  contenido: string;
  titulo: string;
};

export default function ComponentePost({ post }: { post: Post }) {
  return (
    <div id={"post-" + post.id}>
      <h3>{post.titulo}</h3>
      <p>{post.contenido}</p>
      <em>Publicado por: {post.usuario}</em>
    </div>
  );
}
