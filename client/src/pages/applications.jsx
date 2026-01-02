import { useState } from "react";
import Navbar from "../components/navBar";
import { assets, jobsApplied } from "../assets/assets";


function Applications(){
    const [isEdit , setisEdit] = useState(false);
    const [resume , setresume] = useState(null);
    return (
        <div>
            <Navbar/>
            <div  className="container px-4 min-h-[64vh] mx-auto my-10">
                <h2 className="text-xl font-semibold">Your Resume</h2>
                <div className="flex gap-2 mb-6 mt-3">
                    {
                        isEdit?
                            <>
                            <label htmlFor="resumeUpload" className="flex items-center">
                                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">Select Resume</p>
                                <input hidden onChange={e=>setresume(e.target.files[0])} type="file" accept=".pdf, application/pdf" id="resumeUpload" />
                                <img className="cursor-pointer" src={assets.profile_upload_icon} alt="profile upload icon" />
                                
                            </label>
                            <button onClick={()=>setisEdit(false)} className="bg-green-100 border border-green-400 rounded-lg px-4 py-2">Save</button>
                            </>
                        :<div className="flex gap-3 flex-row">
                            <a href="" className="border border-blue-300 bg-blue-100 rounded px-2 py-1 text-blue-600">Resume</a>
                            <button onClick={()=>setisEdit(true)} className="bg-white text-gray-600 px-3 py-1 border  rounded border-gray-400">Edit</button>
                            
                        </div>                        
                    }
                </div>
                <h2 className="text-xl font-semibold mb-4">Jobs applied</h2>
                <table className="border rounded w-full border-gray-400"> 
                    <thead>
                        <tr>
                            <th className="py-3 px-3 border-b border-gray-400 text-left">Company</th>
                            <th className="py-3 px-3 border-b border-gray-400 text-left">Job title</th>
                            <th className="py-3 px-3 border-b border-gray-400 text-left">Location</th>
                            <th className="py-3 px-3 border-b border-gray-400 text-left">Date</th>
                            <th className="py-3 px-3 border-b border-gray-400 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobsApplied.map((obj,i) =>(
                            <tr className="border-b h-15 border-gray-400" key={i} >
                                <td className="px-4 py-3 flex items-center gap-2"><img src={obj.logo} alt="company logo" />{obj.company}</td>
                                <td className="px-4 py-3">{obj.title}</td>
                                <td className="px-4 py-3 ">{obj.location}</td>
                                <td className="px-4 py-3 ">{obj.date}</td>
                                <td className="px-4 py-3"><span className={`${obj.status === 'Accepted'?'bg-green-100 border-green-300 text-green-600':obj.status==='Rejected'?'bg-red-100 border-red-300 text-red-600':'bg-blue-100 border-blue-300 text-blue-600'} px-4 py-1.5 rounded border font-medium`}>{obj.status}</span></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Applications;