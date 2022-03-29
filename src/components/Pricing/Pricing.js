import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'free', price: 0 },
        { id: 2, name: 'regular', price: 9.99 },
        { id: 3, name: 'premium', price: 19.99 }
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