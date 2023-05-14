import React, { useContext, useEffect, useState } from 'react';
import ShowApplyjobs from './ShowApplyjobs';
import { LocalData } from './LocalData';




const AppliedJobs = () => {
    let newJobs=[];
    const [jobs,setJobs]=useState([]);
    const [applyJob,setApplyJob]=useState([]);
    const lsd=JSON.parse(localStorage.getItem("job"));
    useEffect(()=>{
        fetch("/jov.json")
        .then(res=>res.json())
        .then(data=>setJobs(data));
      },[])
      
   
        for (const id in lsd) {
            const findJob=jobs.find(job=>job.id===id)
            
           if(findJob)
           { 
             const exists=applyJob.find(job=>job.id ===findJob.id);
             if(!exists)
               {
                 newJobs=[...applyJob,findJob];
                 setApplyJob(newJobs); 
            }
           }
               
         }
    const handleOnsite=()=>{
        const onSiteJob=applyJob.filter(job=>job.duration==="onsite");
        
        setApplyJob(onSiteJob);
        
    }
    const handleRemote=()=>{
         const remoteJob=applyJob.filter(job=>job.duration === "remote");
         setApplyJob(remoteJob);
         
         
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
            applyJob && applyJob.map(job=><ShowApplyjobs key={job.id} job={job}></ShowApplyjobs>)
          }
          </div>
        </div>
    );
};

export default AppliedJobs;