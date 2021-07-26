import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = (props) => {
    const { picture, name, description, price } = props.location.state.product;
    return (
        <div className="detail-container">
            <div className="detail-wrapper">
                <div className="image">
                    <img src={picture} alt="user"  width="200" height="auto"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{description}</div>
                    <div className="price">{price}</div>
                </div>
            </div>
            <div className="return">
                <Link to="/">
                    <button className="btn-home">
                        Voltar para a Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;
