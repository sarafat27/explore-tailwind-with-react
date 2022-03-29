import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';
const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-slate-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p className='my-2'>
                <span className='text-4xl font-bold'>{price}$</span>
                <span className='text-xl font-bold text-gray-400'>/mo</span>
            </p>
            <div>
                <h2 className='text-xl font-bold text-left'>Benefits:</h2>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-blue-500 flex w-full justify-center rounded py-2 mt-6 text-white font-bold hover:bg-blue-700'>Buy now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon></button>
        </div>
    );
};

export default PricingOption;