import React from 'react';

const Feature = ({ftr}) => {
    return (
        <div className='bg-gray-300 bg-opacity-50 p-5 rounded-md'>
            <img src={ftr.logo} alt="" className='w-[70px] rounded-md' />
            <h1 className='text-xl font-semibold'>{ftr.name}</h1>
            <h3>{ftr.jobAbailable} jobs Abailable</h3>
        </div>
    );
};

export default Feature;