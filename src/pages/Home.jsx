
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import ViewAll from '../components/ViewAllJobs'
const Home = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListing isHome= {true}/>
    <ViewAll/>
    </>
  )
}

export default Home