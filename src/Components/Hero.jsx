import React from 'react'
import Features from '../Components/Feature';
import SportswearSaleBanner from '../Components/SportswearSaleBanner';
import FlashSale from './FlashSale';

function Hero() {
    return (
        <div className='container max-w-max mx-auto'>
            <Features />
            <SportswearSaleBanner />
            <FlashSale/>
        </div>
    )
}

export default Hero
