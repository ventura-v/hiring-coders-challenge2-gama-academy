import React from 'react';
import { Link } from 'react-router-dom'

import ProductCard from '../../components/ProductCard';

import './home.scss'

const Home = (props) => {

    const cartProduct = (id) => {
        props.getProductId(id);
    };

    const renderProducts = props.products.map((product) => {
        return (
            <ProductCard 
                key={product.id}
                product={product}
                clickHander={cartProduct}
                remove={false}
            />
        )
    })

    return (
        <section className="products-container">
            
            <div className="header home">
                <h1 className="title">Produtos</h1>
                <Link to="/carrinho">
                    <button className="btn-header btn-cart"> Carrinho </button>
                </Link>
            </div>

            <div className="products-wrapper">
                {renderProducts}
            </div>
        </section>
    );
}

export default Home;