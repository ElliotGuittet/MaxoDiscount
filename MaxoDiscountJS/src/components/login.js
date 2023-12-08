import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Ajoutez ici la logique d'authentification
        // Par exemple, vérifiez les identifiants contre une base de données factice
        // C'est ici que vous pouvez utiliser un service d'authentification, une API, etc.
        // Pour cet exemple, je vais simplement simuler une connexion réussie
        onLogin({ username });
    };

    return (
        <div className="login-form">
            <h2>Connexion</h2>
            <label htmlFor="username">Nom d'utilisateur:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Mot de passe:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Se connecter</button>
        </div>
    );
};

export default Login;
