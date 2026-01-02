import { useContext, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/appContext";

const Hero = ()=>{
    console.log("hero re-render");
    const {setsearchFilter  ,setisSearched} = useContext(AppContext);
    const titleRef = useRef(null);
    const locationRef = useRef(null);
    // const [showFilter , setshowFilter] = useState(true);
    const onSearch = ()=>{
        setsearchFilter({
           title:titleRef.current.value,
           location:locationRef.current.value
        })
        setisSearched(true);
        console.log({
           title:titleRef.current.value,
           location:locationRef.current.value
        })
    }
    return (
        <div className="container mx-auto my-10">
            <div className="flex flex-col justify-center items-center bg-linear-to-r from-purple-400 to-purple-950 text-white py-16 text-center mx-2 rounded-2xl">
                <h2 className="font-bold text-3xl mb-4">Find your dream job today</h2>
                <p>Explore thousands of job opportunities. Your future career awaits<br></br> Start your journey now</p>
                <div className="flex gap-0 justify-center bg-white rounded-2xl p-2 w-[40%]">
                    <div className="flex justify-around bg-white text-black">
                        <img src={assets.search_icon}></img>
                        <input type="text" placeholder="search for jobs"
                        className="p-2 rounded w-full outline-none " ref = {titleRef}></input>
                    </div>

                    <div className="flex justify-around bg-white text-black">
                        <img src={assets.location_icon}></img>
                        <input type="text" placeholder="location" ref={locationRef}
                        className="p-2 rounded w-full outline-none "></input>
                    </div>
                    <button className="bg-blue-600 pl-4 pr-4 rounded " onClick={onSearch}>  Search  </button>
                </div>
            </div>
            <div className="flex gap-4 m-4 mt-10 border-2 p-6 rounded-xl border-gray-300 shadow-md flex-wrap">
                <p>Trusted by</p>
                <img className="h-6"src={assets.microsoft_logo} alt="microsoft_logo"/>
                <img className="h-6"src={assets.samsung_logo} alt="samsung_logo" />
                <img className="h-6"src={assets.accenture_logo} alt="accenture_logo" />
                <img className="h-6"src={assets.amazon_logo} alt="amazon_logo" />
                <img className="h-6"src={assets.adobe_logo} alt="adobe_logo" />
                <img className="h-6"src={assets.walmart_logo} alt="walmart_logo" />
            </div>
             {/* <button onClick={()=>{
                setshowFilter(!showFilter)
             }} className="block lg:hidden ml-10 border bg-blue-600 text-white px-4 py-1.5 rounded font-medium">
                {showFilter?"Close":"Filter"}
            </button> */}
        </div>
    )
}
export default Hero;