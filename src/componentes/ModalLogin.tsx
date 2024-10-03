import { useState } from "react";

export default function ModalLogin({ login }: { login: (usuario: string) => void }) {
  const [usuario, setUsuario] = useState("");

  return (
    <div style={{ background: "white" }}>
      <label htmlFor="titulo">Usuario</label>
      <input type="text" id="input-login-usuario" onChange={(e) => setUsuario(e.target.value)} />
      <button id="boton-confirmar-login" onClick={() => login(usuario)}>Iniciar sesion</button>
    </div>
  );
}
