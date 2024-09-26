import { useState } from "react";

export default function ModalLogin({ login }: { login: (usuario: string) => void }) {
  const [usuario, setUsuario] = useState("");

  return (
    <div
      style={{
        background: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "3rem",
      }}>
      <label htmlFor="titulo">Usuario</label>
      <input type="text" id="titulo" onChange={(e) => setUsuario(e.target.value)} />
      <button onClick={() => login(usuario)}>Iniciar sesion</button>
      <p>funciona por favor</p>
    </div>
  );
}
