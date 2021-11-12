import React from 'react';
import Banner from '../Banner/Banner';
import DisplayReview from '../DisplayReview/DisplayReview';
import Products from '../Products/Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products/>
            <DisplayReview></DisplayReview>
        </div>
    );
};

export default Home;