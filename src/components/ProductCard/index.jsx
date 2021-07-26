import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as AddIcon } from '../../assets/icons/shopping_cart.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
// import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'

import './product-card.scss'

const ProductCard = (props) => {
    const { id, picture, name, price } = props.product
    const remove = props.remove

    return (
        <div className="product-container">
            <Link to={{ pathname: `/produto/${id}`, state: { product: props.product } }}>
                <div className="product-img">
                    <img src={picture} alt={name}/>
                </div>
                <h3 className="product-name">{name}</h3>
                <h4 className="product-price">R$ {price}</h4>
            </Link>
            {remove && 
                <DeleteIcon
                    className="delete-icon"
                    onClick={() => props.clickHander(id)}
                />
            }
            {!remove && <>
                {/* <Link className="edit-icon" to={{ pathname: `/editar`, state: { product: props.product } }}>
                    <EditIcon />
                </Link> */}
                <AddIcon
                    className="add-icon"
                    onClick={() => props.clickHander(props.product)}
                />
            </>}
        </div>
    );
}

export default ProductCard;