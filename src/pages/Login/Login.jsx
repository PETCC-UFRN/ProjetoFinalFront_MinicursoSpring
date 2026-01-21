import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const credentials = btoa(`${username}:${password}`);

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Authorization": "Basic " + credentials
        }
      });

      if (response.ok) {
        // Salva para usar nos próximos fetches (POST/PUT/DELETE)
        sessionStorage.setItem("token", credentials);
        alert("Bem-vindo, Admin!");
        navigate("/Menu");
      } else {
        alert("Usuário ou senha inválidos");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Acesso Restrito</h1>
        <p className="login-subtitle">Entre com suas credenciais de administrador</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu login"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Entrar no Sistema
          </button>
        </form>
      </div>
    </div>
  );
}
