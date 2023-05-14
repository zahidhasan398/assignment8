import React from 'react';
import { Link } from 'react-router-dom';

const ShowApplyjobs = ({job}) => {
    
    
    
    return (
        <>
        {
            job && 
            <div className='border border-black border-opacity-70 mx-8 my-5 p-1 flex md:flex-row flex-col gap-3 items-center'>
            <img src={job.logo} className='w-[150px]' alt="" />
            
            <div>
            <h1 className='text-2xl font-semibold'>{job.name}</h1>
            <h2 className='text-xl my-2'>{job.companyName}</h2>
            <div className='my-2'>
                <span className='border border-black p-1 mr-1'>{job.permanent}</span>
                <span className='border border-black p-1'>{job.duration}</span>
            </div>
            <div>
                <span className='mr-5'>{job.address}</span>
                <span>{job.salary}</span>
            </div>
            
            
            </div>
            <Link to={`/details/${job.id}`}>
            <button className='btn btn-primary mt-auto w-[120px]'>View Details</button></Link>
        </div>
        }
        </>
    );
};

export default ShowApplyjobs;