import React from 'react'
import Features from '../Components/Feature';
import SportswearSaleBanner from '../Components/SportswearSaleBanner';
import FlashSale from './FlashSale';
import ShopByCategory from './CategarySection';
import TopSellers from './TopSellerSection';
import HotDeals from './HoteDeals';
import Banner from './Banner';

function Hero() {
    return (
        <div className='container max-w-max mx-auto'>
            <Features />
            <SportswearSaleBanner />
            <FlashSale/>
            <ShopByCategory/>
            <TopSellers/>
            <HotDeals/>
            <Banner/>
        </div>
    )
}

export default Hero
