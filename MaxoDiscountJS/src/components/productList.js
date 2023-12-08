import React from "react";
import Product from "./product";

const ProductList = ({ products }) => (
    <div className="product-list">
        {products.map((product) => (
            <Product key={product.id} {...product} />
        ))}
    </div>
);

export default ProductList;
