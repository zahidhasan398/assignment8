import React, { createContext, useEffect, useState } from 'react';
import Feature from './Feature';
import { useLoaderData } from 'react-router-dom';
import ShowJobs from './ShowJobs';

import { singleJob } from './SingleJob';
import JobDetails from './JobDetails';
import AppliedJobs from './AppliedJobs';
import { LocalData, singleData } from './LocalData';



const Home = () => {
    const [showAll,setShowall]=useState(false);
    const jovs=useLoaderData();
    const [feature,setFeature]=useState([]);
    const [selectedJob,setSelectedJob]=useState([]);
    const [viewJob,setViewJob]=useState({});
    
    useEffect(()=>{
        fetch("catagory.json")
        .then(res=>res.json())
        .then(data=>setFeature(data));
    },[])
    let newJob=[];
    const handleAddJob=(job)=>{
       
       
             setViewJob(job);
        const exists=selectedJob.find(jb=>jb.id === job.id);
        if(!exists){
           newJob=[...selectedJob,job];
        }
        setSelectedJob(newJob);
        
    }
    
    

    
    
    
    return (
        
            <div className='max-w-7xl mx-auto'>
                <JobDetails viewJob={viewJob}></JobDetails>
           <div className='flex flex-col md:flex-row items-center'>
            <div className='flex-1'>
                <h1 className='text-7xl font-bold my-10 max-w-3xl'>Before find job make your skill</h1>
                <p className='max-w-3xl'>What sort of work do you want to do? Most of the job openings are engineering focused. Before their current growth, I was recruited because I had a decent presence in the Free and Open Source Software world. If you want to work on software at the Wikimedia Foundation, it would be good to start making contributions on wiki with javascript gadgets or contributing to MediaWiki</p>
                <button className='btn btn-primary my-6'>Get Started</button>
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?b=1&s=170667a&w=0&k=20&c=N8WxUng80PkPIxTSFGjN69BMUZIe9TuxFzrvRc7kOI8=" alt="" />
            </div>
           </div>
           <div className='text-center text-4xl font-semibold'>Job Category List</div>
           <p className='text-center my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className='flex md:flex-row flex-col justify-between'>
            {
                feature.map(ftr=><Feature key={ftr.id} ftr={ftr}></Feature>)
            }
           </div>
           <div>
            <div>
                <div className='text-center my-7'>
                    <h1 className='text-3xl font-semibold'>Featured jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
               <div className='grid md:grid-cols-2 grid-cols-1 gap-5 my-6'>
               {
                   showAll ? jovs.map(job=><ShowJobs handleAddJob={handleAddJob} key={job.id} job={job}></ShowJobs>) : jovs.slice(0,4).map(job=><ShowJobs handleAddJob={handleAddJob} key={job.id} job={job}></ShowJobs>)
                }
               </div>
                <div className='text-center'>
                <button onClick={()=>setShowall(!showAll)} className='btn btn-warning'>show all</button>
                </div>
            </div>
           </div>
          
        </div>
        
    );
};

export default Home;