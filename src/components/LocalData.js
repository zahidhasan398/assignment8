

const LocalData = (id) => {
  let lsd={};
  const storaje=localStorage.getItem("job");
  if(storaje){
    lsd=JSON.parse(storaje);
  }
  let exist=lsd[id];
  if(!exist){
     lsd[id]=1;
  }
  localStorage.setItem("job",JSON.stringify(lsd));
};
const singleData=(job)=>{
    console.log(job);
    return job;
}

export  {LocalData,singleData};