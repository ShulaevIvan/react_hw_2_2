import React from 'react';
import { useState } from 'react';
import CardView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import IconSwitch from '../IconSwitch/IconSwitch';

const Store = () => {
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];

      const onSwitch = (e) => {
        if (viewState.viewIcon === 'view_module') {
          return setViewState({
            ...viewState,
            viewIcon: 'view_list',
            listStyle: CardView,
          });
        }
        return setViewState({
            ...viewState,
            viewIcon: 'view_module',
            listStyle: ListView,
          });
        
      }

      const initialState = {
        viewIcon: 'view_list',
        switchFunc: onSwitch,
        listStyle: CardView,
      };

      const [viewState, setViewState] = useState(initialState);

      return (
        <React.Fragment>
            <IconSwitch switchFunc={onSwitch} switchBtnClass={viewState.viewIcon}></IconSwitch>
            <viewState.listStyle products={products} productsStyle = {viewState.viewIcon}></viewState.listStyle>
        </React.Fragment>
        
      );
}

export default Store