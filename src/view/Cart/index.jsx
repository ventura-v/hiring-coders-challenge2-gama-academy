import React from "react";
import { Link } from 'react-router-dom'

import ProductCard from "../../components/ProductCard";

const Cart = (props) => {

    const removeProduct = (id) => {
        props.getProductId(id);
    };

    const renderProducts = props.products.map((product) => {
        return (
            <>
                <ProductCard 
                    key={product.id}
                    product={product}
                    clickHander={removeProduct}
                    remove={true}
                />
            </>
        )
    })

    return (
        <section className="products-container">
            
            <div className="header cart">
                <h1 className="title">Meu Carrinho</h1>
                <div className="return">
                    <Link to="/">
                        <button className="btn-header btn-home">
                            Voltar para a Home
                        </button>
                    </Link>
                </div>
            </div>

            <div className="products-wrapper">
                {renderProducts}
            </div>
        </section>
    );
}

export default Cart;
