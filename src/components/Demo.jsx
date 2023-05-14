import React, { useContext, useEffect, useState } from 'react';
import ShowApplyjobs from './ShowApplyjobs';
import { LocalData } from './LocalData';




const AppliedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const lsd=JSON.parse(localStorage.getItem("job"));
    useEffect(()=>{
        fetch("/jov.json")
        .then(res=>res.json())
        .then(data=>setJobs(data));
      },[])
      let newJobs=[];
    for (const id in lsd) {
       const findJob=jobs.find(job=>job.id===id)
       newJobs.push(findJob);
    }
    console.log(newJobs);
    const handleOnsite=()=>{
       return newJobs=newJobs.filter(job=>job.duration==="onsite");
    }
    const handleRemote=()=>{
        return newJobs=newJobs.filter(job=>job.duration === "remote");
    }
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='text-2xl text-center font-extrabold my-5'>Job Details</div>
            <div className='flex justify-end'>
                <button className='btn btn-info mr-4' onClick={handleOnsite}>onsite</button>
                <button className='btn btn-warning' onClick={handleRemote}>remote</button>
            </div>
          <div>
          {
            newJobs && newJobs.map(job=><ShowApplyjobs job={job}></ShowApplyjobs>)
          }
          </div>
        </div>
    );
};

export default AppliedJobs;