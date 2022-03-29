import React from 'react';

const PricingOption = (props) => {
    const { name, price } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-slate-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-4xl font-bold'>{price}$</span>
                <span className='text-xl font-bold text-gray-400'>/mo</span>
            </p>
        </div>
    );
};

export default PricingOption;