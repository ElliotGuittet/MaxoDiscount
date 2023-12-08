import React from "react";

const ProductDetail = ({ product }) => (
    <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>Description: {product.description}</p>
        {/* Ajoutez d'autres détails de produit selon vos besoins */}
    </div>
);

export default ProductDetail;
