import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";


export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [isSearched , setisSearched] = useState(false);
    const [searchFilter , setsearchFilter] = useState({
        title : '',
        location : ''
    })
    const [jobs , setjobs] = useState([]);
    const [showRecruiterLogin , setshowRecruiterLogin] = useState(false);

    const fetchJobs =async ()=>{
        setjobs(jobsData);
    }
    useEffect(()=>{
        fetchJobs();
    } , []);
    const value = {
        isSearched , 
        setisSearched,
        searchFilter , 
        setsearchFilter, //giving here so that these can be accessed from any file
        jobs, setjobs,
        showRecruiterLogin , setshowRecruiterLogin
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}