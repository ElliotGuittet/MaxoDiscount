import { useState } from "react";

function Header() {
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        // Ajoutez ici la logique de déconnexion si nécessaire
        setUser(null);
    };

    return (
        <header>
            <h1>MaxODiscount</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/produits">Produits</a>
                    </li>
                    <li>
                        <a href="/panier">Panier</a>
                    </li>
                    {user ? (
                        <li>
                            <button onClick={handleLogout}>
                                Se déconnecter
                            </button>
                        </li>
                    ) : (
                        <li>
                            <a href="/">Se connecter</a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
