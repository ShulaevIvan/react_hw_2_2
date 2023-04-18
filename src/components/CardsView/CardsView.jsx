import React from 'react';
import ShopItem from '../ShopItem/ShopItem';

const CardView = (props) => {
    return (
        <React.Fragment>
            <div className="card-row">
                {props.products.map((product, i) => {
                    return (
                        <ShopItem key={i} productInfo={product} productStyle={props.productsStyle}></ShopItem>
                    );
                })};
            </div>
        </React.Fragment>
    );
}

export default CardView;