import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApplication = ()=>{
    return (
        <div className="">
            <table className="w-full border border-gray-200">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 px-4 text-left">#</th>
                        <th className="py-2 px-4 text-left">User name</th>
                        <th className="py-2 px-4 text-left">Job Title</th>
                        <th className="py-2 px-4 text-left">Location</th>
                        <th className="py-2 px-4 text-left">Resume</th>
                        <th className="py-2 px-4 text-left">Action</th>
                    </tr>
                </thead> 
                <tbody>
                    {viewApplicationsPageData.map((ele , i)=>{
                        return <tr key={i} className="border-b border-gray-200 text-gray-700">
                                    <td className="py-2 px-4 text-center">{i+1}</td>
                                    <td className="py-2 px-4 text-center flex items-center gap-4 mr-4" >
                                        <img src={ele.imgSrc} alt="image of applicant" className="w-10 h-10 rounded-full "/>
                                        <span>{ele.name}</span>
                                    </td>
                                    <td className="py-2 px-4 ">{ele.jobTitle}</td>
                                    <td className="py-2 px-4">{ele.location}</td>
                                    <td className="py-2 px-4"><a href="" target="_blank" className="bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center"> Resume <img src={assets.resume_download_icon} alt="download icon" /></a></td>
                                    <td className="py-2 px-4 relative">
                                        <div className="group relative inline-block text-left">
                                            <button className="text-gray-500 action-button">...</button>
                                            <div className="z-10 hidden absolute right-0 top-0 left-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                                                <button className="w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100">Accept</button>
                                                <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Reject</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ViewApplication;