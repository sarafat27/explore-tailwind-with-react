import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'lifetime free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'everything on free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'everything on regular',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        }
    ]
    return (
        <div className='bg-slate-300 p-4 mt-8'>
            <h1 className='text-6xl font-serif text-blue-900 mb-4'>Best deals of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit architecto dignissimos esse veniam provident. Vitae illum veritatis asperiores quibusdam dolor.</p>
            <div className='mt-4 grid md:grid-cols-3 gap-4'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;