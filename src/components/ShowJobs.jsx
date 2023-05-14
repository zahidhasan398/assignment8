import React from 'react';
import { Link } from 'react-router-dom';

const ShowJobs = ({job}) => {
    const {logo,name,companyName,permanent,address,salary,duration,id}=job;
    return (
        <div className='border p-4 flex flex-col'>
            <img src={logo} className='w-[90px] ' alt="" />
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <h2 className='text-xl my-2'>{companyName}</h2>
            <div className='my-2'>
                <span className='border border-black p-1 mr-1'>{permanent}</span>
                <span className='border border-black p-1'>{duration}</span>
            </div>
            <div>
                <span className='mr-5'>{address}</span>
                <span>{salary}</span>
            </div>
            <Link to={`/details/${id}`}>
            <button className='btn btn-primary mt-auto w-1/3'>View Details</button>
            </Link>
        </div>
    );
};

export default ShowJobs;