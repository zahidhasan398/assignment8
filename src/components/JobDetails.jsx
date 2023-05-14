import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone,faVoicemail,faAddressBook} from '@fortawesome/free-solid-svg-icons'
import { LocalData } from './LocalData';


const JobDetails = () => {
    const [jobs,setJobs]=useState([]);
    const Id=useLoaderData();
    console.log(Id);
    useEffect(()=>{
      fetch("/jov.json")
      .then(res=>res.json())
      .then(data=>setJobs(data));
    },[])
    console.log(jobs);
    const job=jobs.find(jb=>jb.id === Id);
    console.log(job);
    let newCart=[];
    const appliedJobs=(id)=>{
        
        LocalData(id);
    }
    
    
    return (
        <div>
            <h1 className='text-3xl font-extrabold text-center my-5'>Job Details</h1>
            {
                job && <div className='flex md:flex-row flex-col p-4 '>
                    <div>
                <p className='m-5'><span className='font-bold'>jobDescription: </span>
                {job.jobDescription}</p>
                <p className='m-5'><span className='font-bold'>jobResponsibility: </span>
                {job.jobResponsibility}</p>
                <p className='m-5'><span className='font-bold'>educationalRequirements : </span>
                {job.educationalRequirements}</p>
                <p className='m-5'><span className='font-bold'>experience : </span>
                {job.experiences}</p>
                </div>
                <div className='bg-slate-400 bg-opacity-50 p-5'>
                    <h1 className='font-bold text-xl text-center'>Job Details</h1>
                  <h1> salary: {job.salary}</h1> 
                  <h1>job title: {job.name}</h1>
                  <h1 className='font-bold text-xl text-center'>Contact Information</h1>
                  <h1><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> phone: {job.phone}</h1>
                  <h1><FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon> email: {job.email}</h1>
                  <h1><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> address: {job.address}</h1>
                  <button className='btn btn-primary my-3' onClick={()=>appliedJobs(job.id)}>Apply now</button>
                </div>
                </div>
            }
            
        </div>
    );
};

export default JobDetails;