import { useState } from "react";
import Login from "./login";
import ProductList from "./productList";
import Muguet from "../images/muguet.jpg";
import Hibiscus from "../images/hibiscus.jpg";
import Iris from "../images/iris.jpg";
import Rose from "../images/rose.jpg";
import Violette from "../images/violette.jpg";
import Tulipe from "../images/tulipe.jpg";

function Main() {
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        // Mettez à jour l'état de l'utilisateur lorsqu'il se connecte
        setUser(userData);
    };

    const products = [
        {
            id: 1,
            name: "Muguet",
            price: 9.99,
            image: { Muguet },
            description:
                "Le muguet (Convallaria majalis) appelé aussi lis des vallées, amourette ou gazon du Parnasse, est une plante vivace rhizomateuse (avec des griffes), ayant élu domicile dans toutes les zones tempérées de l'hémisphère Nord, plus spécialement dans les sous-bois clairs.",
        },
        {
            id: 2,
            name: "Hibiscus",
            price: 13.99,
            image: { Hibiscus },
            description:
                "L'hibiscus, appelé également rose de Chine ou Althea est une plante originaire des régions tropicales et subtropicales du monde. Il est souvent appelé la « rose d'Afrique » à cause de la ressemblance de ses fleurs avec les roses.",
        },
        {
            id: 3,
            name: "Iris",
            price: 11.99,
            image: { Iris },
            description:
                "L’Iris est un genre de plantes vivaces à rhizomes ou à bulbes de la famille des Iridacées. Le genre Iris contient 210 espèces et d'innombrables variétés horticoles. On trouve souvent dans les jardins des Iris hybrides horticoles appelés à tort Iris germaniques.",
        },
        {
            id: 4,
            name: "Rose",
            price: 15.99,
            image: { Rose },
            description:
                "La rose est la fleur du rosier, arbuste du genre Rosa et de la famille des Rosaceae. La rose des jardins se caractérise avant tout par la multiplication de ses pétales imbriqués, qui lui donne sa forme caractéristique.",
        },
        {
            id: 5,
            name: "Violette",
            price: 13.99,
            image: { Violette },
            description:
                "Viola est un genre de plantes herbacées vivaces de la famille des Violaceae. Selon le positionnement des pétales, les espèces sont appelées « Violettes » ou « Pensées ». Les violettes sont parfois appelées « Herbes de la Trinité ».",
        },
        {
            id: 6,
            name: "Tulipe",
            price: 11.99,
            image: { Tulipe },
            description:
                "Les tulipes sont des plantes vivaces bulbeuses à tiges longues, dures et solitaires, parfois tendues vers le haut. Les feuilles sont assez peu nombreuses.",
        },
    ];

    return (
        <div>
            {user ? (
                <section id="featured-products">
                    <ProductList products={products} />
                </section>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default Main;
