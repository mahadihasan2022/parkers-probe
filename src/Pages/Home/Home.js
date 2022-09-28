import React from 'react';
import Banner from '../../Share/Banner/Banner';
import Carts from '../../Share/Carts/Carts';
import Items from '../../Share/Items/Items';
import Product from '../../Share/Product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Carts></Carts>
            <Product></Product>
        </div>
    );
};

export default Home;