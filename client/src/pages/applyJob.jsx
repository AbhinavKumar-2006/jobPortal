import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { assets, jobsData } from "../assets/assets";
import Loading from "../components/loading";
import Navbar from "../components/navBar";
import kconvert from "k-convert";
import moment from "moment";
import JobCard from "../components/jobCard";

function ApplyJob(){
    const {id} = useParams();
    const {jobs} = useContext(AppContext);
    const [jobData , setjobData] = useState(null);
    const fetchJobs = async ()=>{ //usefull for backend
        const data = jobs.filter(job => job._id === id);
        if(data.length !== 0){
            setjobData(data[0]);
            console.log(data[0]);
        }
    }


    useEffect(()=>{
        if(jobs.length>0) fetchJobs(); //bcoz when jobs will be fetched from backend in context it may be possible currently it has not came and job= []
    } , [id , jobs]);//and this is the reason added jobs in dependency array because when backend changed jobs -> leading to re-redering -> i need to again fetch my id job 
    return (
        jobData?(
            <>
                <Navbar/>
                <div className="container min-h-screen flex flex-col py-10 px-4 mx-auto">
                    <div className="rounded-lg w-full border bg-blue-50 border-blue-300 px-10 py-20">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="flex flex-wrap">
                                <img src={jobData.companyId.image} className="h-20 w-20"/>
                                <div className="flex flex-col ml-10">
                                    <h1 className="text-3xl font-medium mb-4">{jobData.title}</h1>
                                    <div className="flex gap-5">
                                        <span className="flex gap-1"><img src={assets.suitcase_icon} className="h-5 w-5"></img>{jobData.companyId.name}</span>
                                        <span className="flex gap-1"><img src={assets.location_icon} className="h-5 w-5"></img>{jobData.location}</span>
                                        <span className="flex gap-1"><img src={assets.person_icon} className="h-5 w-5"></img>{jobData.level}</span>
                                        <span className="flex gap-1"><img src={assets.money_icon} className="h-5 w-5"></img>CTC: {kconvert.convertTo(jobData.salary)}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="bg-blue-600 text-white px-4 py-1.5 rounded font-medium cursor-pointer mb-2">Apply now</button>
                                <div><p className="text-gray-600 text-xs float-right">posted {moment(jobData.date).fromNow()}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-start">
                        <div className="w-full lg:w-2/3">
                            <h2 className="font-bold text-2xl mb-4 mt-10">Job description</h2>
                            <div className="prose prose-li:list-disc" dangerouslySetInnerHTML={{__html:jobData.description}}></div>
                            <button className="bg-blue-600 text-white px-4 py-1.5 rounded font-medium cursor-pointer mb-2">Apply now</button>
                        </div>

                        {/* right section */}
                        <div className="lg:w-1/3">
                            <p className="text-xl font-medium mb-6 mt-10">{`more jobs from ${jobData.companyId.name}`}</p>
                            <div className="flex flex-col gap-6">
                                {jobs.filter(job=>job._id != jobData._id).filter(job =>job.companyId._id === jobData.companyId._id).slice(0,4).map((job,i)=><JobCard job={job} key={i}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ):
        <Loading/>
    )
}
export default ApplyJob;