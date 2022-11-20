import React from "react";

function Product({redLabel, image, bagName, price}) {
    return (
        <article>
            <span>{redLabel}</span>
            <img src={image} alt={bagName + " image"}/>
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;
