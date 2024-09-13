import { useState, useEffect } from 'react'
import SingleJobList from './singleJobList'
import Spinner from './Spinner';

const JobListing = ({isHome = true}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] =useState(true)

  useEffect(()=>{
    const apiUrl = isHome ? ('/api/jobs?_limit=3') : ('/api/jobs')
    const fetchData = async ()=>{
      try{
        
      const res = await fetch(apiUrl)
      const  data = await res.json()
      setJobs(data)
      console.log('hello',jobs)


      }catch(error){
        console.log(error)

      }finally{
        setLoading(false)
      }
      
    }
    fetchData();
  },[]);


// const recentJobs = isHome ?  Jobs.slice(0,3) : Jobs

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (<Spinner/>) : (jobs.map((job)=>(
                 <SingleJobList key={job.id} job = {job}/>

                ))) }
          </div>
        </div>
      </section>
  )
}

export default JobListing