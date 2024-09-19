import { useState } from "react";

export default function ModalLogin({ login }: { login: (usuario: string) => void }) {
  const [usuario, setUsuario] = useState("");

  return (
    <div>
      <label htmlFor="titulo">Usuario</label>
      <input type="text" id="titulo" onChange={(e) => setUsuario(e.target.value)} />
      <button onClick={() => login(usuario)}>Iniciar sesion</button>
    </div>
  );
}
