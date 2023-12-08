import React from "react";

const Product = ({ name, price, image }) => (
    <div className="product">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}€</p>
        <button>Ajouter au panier</button>
    </div>
);

export default Product;
