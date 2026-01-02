import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/appContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./jobCard";
const JobListing = ()=>{
    console.log("job listing re-render");
    // const [showFilter , setshowFilter] = useState(true);
    const [currentPage , setcurrentPage] = useState(1);
    const [selectedCategories , setselectedCategories] = useState([]);
    const [selectedLocation , setselectedLocation] = useState([]); 
    
    const {isSearched , searchFilter , setsearchFilter , jobs} = useContext(AppContext);
    const [filteredJobs , setfilteredJobs] = useState(jobs);
    const handleCategoryChange = (category)=>{
        setselectedCategories((prev) => {
            if(prev.includes(category)) return prev.filter((ele) => ele !== category);
            else return [...prev , category];
        });
    }
    const handleLocationChange = (location)=>{
        setselectedLocation((prev) => {
            if(prev.includes(location)) return prev.filter((ele) => ele !== location);
            else return [...prev , location];
        });
    }
    useEffect(()=>{
        const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category);
        const matchesLocation = job => selectedLocation.length === 0 || selectedLocation.includes(job.location);
        const matchesTitle = job => searchFilter.title === '' || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
        const matchesSearchLocation = job => searchFilter.location === '' || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
        const newFilteredJobs = jobs.slice().reverse().filter(job => matchesCategory(job)&&matchesLocation(job)&&matchesTitle(job)&&matchesSearchLocation(job));
        setfilteredJobs(newFilteredJobs);
        setcurrentPage(1);
    } , [selectedCategories , selectedLocation , searchFilter,jobs])
    return(
        <>
        <div className="container mx-auto flex flex-row">
            {/* sidebar */}
            <div className="w-[25%] bg-white px-4 hidden lg:block">
                {(isSearched && (searchFilter.title != '' || searchFilter.location != ''))?(
                    <>
                    <h3 className="font-medium text-lg mb-4">Current Search</h3>
                    <div className="mb-4 text-gray-600 flex gap-1">
                        {searchFilter.title?
                            <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded ">
                                {searchFilter.title}
                                <img src={assets.cross_icon} className="cursor-pointer" onClick={()=>{setsearchFilter((prev) => ({...prev , title:''}))}}/>
                            </span>:<></>}
                        {searchFilter.location?
                            <span className="inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded ">
                                {searchFilter.location}
                                <img src={assets.cross_icon} className="cursor-pointer" onClick={()=>{setsearchFilter((prev) => ({...prev , location:''}))}}/>
                            </span>
                            :<></>}
                    </div>
                    </>
                ):<></> }
                {/* category filter */}
                <div className="mb-10">
                    <h4 className="font-medium text-lg mb-3">Search by categories</h4>
                    <ul className="text-gray-600">
                        {
                            JobCategories.map((ele , i)=>{
                                return(
                                    <li key={i} className="flex gap-2 items-center m-2">
                                    <input type="checkbox" className="scale-125" onChange={()=>handleCategoryChange(ele)} checked={selectedCategories.includes(ele)}/>{ele}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* location filter */}
                <div>
                    <h4 className="font-medium text-lg mb-3">Search by location</h4>
                    <ul className="text-gray-600">
                        {
                            JobLocations.map((ele , i)=>{
                                return(
                                    <li key={i} className="flex gap-2 items-center m-2">
                                    <input type="checkbox" className="scale-125" onChange={()=>handleLocationChange(ele)} checked={selectedLocation.includes(ele)}/>{ele}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            {/* job listing */}
            <section className="w-full text-gray-800">
                <h3 className="text-3xl py-2 font-medium" id="job-list">Latest Jobs</h3>
                <p className="mb-8">Get your desired job from top companies</p>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
                    {filteredJobs.slice((currentPage-1)*6 , 6*currentPage).map((ele , i) => {
                        return <JobCard job={ele} key={i}/>
                    })}
                </div>

                {/* pagination */}
                {
                    filteredJobs.length>0?
                    <div className="flex items-center justify-center space-x-2 mt-10">
                        <a href="#job-list">
                            <img src={assets.left_arrow_icon} onClick={()=>setcurrentPage((curr)=>(curr!==1)?curr-1:curr)}></img>
                        </a>
                        {Array.from({length:Math.ceil(filteredJobs.length/6)}).map((_,idex)=>( //gives an array with undefined ele of this length to iterate for map
                            <a href="#job-list" key={idex}> 
                                <button onClick={()=>{setcurrentPage(idex+1)}} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${(currentPage===idex+1)?`bg-blue-100 text-blue-500`:`text-gray-500`}`}>{idex+1}</button>
                            </a>
                        ))}
                        <a href="#job-list">
                            <img src={assets.right_arrow_icon} onClick={()=>setcurrentPage((curr)=>(curr!==Math.ceil(filteredJobs.length/6))?curr+1:curr)}></img>
                        </a>
                    </div>
                    :
                    <></>
                }
            </section>
        </div></>
    )
}
export default JobListing;