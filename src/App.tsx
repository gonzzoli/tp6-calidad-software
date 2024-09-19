import { useState } from "react";
import { Post } from "./componentes/Post";
import { Button, Modal } from "@mui/material";
import ModalAgregarPost from "./componentes/ModalAgregarPost";
import toast from "react-hot-toast";
import ModalLogin from "./componentes/ModalLogin";

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [usuarioLogeado, setUsuarioLogeado] = useState<string | null>(null);
  const [creandoPost, setCreandoPost] = useState(false);
  const [iniciandoSesion, setIniciandoSesion] = useState(false);

  const publicarPost = (post: Omit<Post, "usuario">) => {
    if (post.contenido.length < 10) {
      toast.error("El contenido del post debe tener al menos 5 caracteres");
      return;
    }
    if (post.titulo.length < 3) {
      toast.error("El titulo del post debe tener al menos 3 caracteres");
      return;
    }
    if (!usuarioLogeado) {
      toast.error("Primero debes iniciar sesion");
      return;
    }
    setPosts([...posts, { ...post, usuario: usuarioLogeado }]);
    setCreandoPost(false);
  };

  const login = (usuario: string) => {
    if (usuario.length < 3) {
      toast.error("El usuario debe tener al menos 3 caracteres");
      return;
    }
    setUsuarioLogeado(usuario);
    setIniciandoSesion(false);
  };

  return (
    <section>
      <Modal open={creandoPost} onClose={() => setCreandoPost(false)}>
        <ModalAgregarPost publicarPost={publicarPost} />
      </Modal>
      <Modal open={iniciandoSesion} onClose={() => setIniciandoSesion(false)}>
        <ModalLogin login={login} />
      </Modal>
      <h1>Migda, tu red social preferida</h1>
      {usuarioLogeado && <h5>Bienvenido {usuarioLogeado}</h5>}
      <div>
        <Button
          variant="contained"
          onClick={() => {
            if (!usuarioLogeado) {
              toast.error("Primero debes iniciar sesion");
              return;
            }
            setCreandoPost(true);
          }}>
          Publicar algo
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setIniciandoSesion(true)}>
          Iniciar sesion {usuarioLogeado && " como otro usuario"}
        </Button>
      </div>
      {posts.map((post) => (
        <div>
          <h4>{post.titulo}</h4>
          <em>Usuario: {post.usuario}</em>
          <p>{post.contenido}</p>
        </div>
      ))}
    </section>
  );
}
