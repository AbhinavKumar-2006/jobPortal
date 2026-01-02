import Hero from "../components/hero";
import JobListing from "../components/jobListing";
import Navbar from "../components/navBar";


function Home(){
    return (
        <div>
            <Navbar/>
            <Hero/>
            <JobListing/>
        </div>
    )
}
export default Home;