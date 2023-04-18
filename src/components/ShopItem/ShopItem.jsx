import React from 'react';


const ShopItem = (props) => {
    if (props.productStyle === 'view_list') {
        return (
            <React.Fragment>
                <div className="card-item">
                    <div className="card-item-content">
                        <div className="card-item-title">{props.productInfo.name}</div>
                        <div className="card-item-color">{props.productInfo.color}</div>
                        <div className="card-item-img-wrap"><img src={props.productInfo.img}/></div>
                        <div className="card-item-control-row">
                            <div className="card-item-control-price">$ {props.productInfo.price}</div>
                            <div className="card-item-control-btn"><a href="#" className="add-to-card-btn">add to cart</a></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    else {
        return (
            <React.Fragment>
                <div className="card-column">
                    <div className="card-item-column-row">
                        <div className="card-item-column-img-wrap"><img src={props.productInfo.img}/></div>
                        <div className="card-item-column-title">{props.productInfo.name}</div>
                        <div className="card-item-column-color">{props.productInfo.color}</div>
                        <div className="card-item-column-price">$ {props.productInfo.price}</div>
                        <div className="card-item-column-btn-wrap"><a href="#" className="add-to-card-btn">add to cart</a></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ShopItem;