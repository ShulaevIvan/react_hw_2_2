import React from 'react';
import ShopItem from '../ShopItem/ShopItem';

const ListView = (props) => {
    return (
        <React.Fragment>
            <div className="card-column">
               {props.products.map((product, i) => {
                    return (
                        <ShopItem key={i} productInfo={product} productStyle={props.productsStyle}></ShopItem>
                    );
               })};
            </div>
        </React.Fragment>
    );
}

export default ListView;