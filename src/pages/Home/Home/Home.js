import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import CycleGuide from '../CycleGuide/CycleGuide';
import DisplayReview from '../DisplayReview/DisplayReview';
import Products from '../Products/Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products/>
            <DisplayReview></DisplayReview>
            <CycleGuide></CycleGuide>
        </div>
    );
};

export default Home;