import moment from "moment";
import { manageJobsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ManageJobs = ()=>{
    const navigate = useNavigate();
    return (
        <div className="container p-4 max-w-5xl">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">#</th>
                            <th className="py-2 px-4 border-b text-left">Job Title</th>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                            <th className="py-2 px-4 border-b text-left">Location</th>
                            <th className="py-2 px-4 border-b text-left">No. of Applicants</th>
                            <th className="py-2 px-4 border-b text-left">Visible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageJobsData.map((ele , i)=>{
                            return <tr key={i} className="text-gray-700">
                                <td className="py-2 px-4 border-b ">{i+1}</td>
                                <td className="py-2 px-4 border-b ">{ele.title}</td>
                                <td className="py-2 px-4 border-b ">{moment(ele.date).format('ll')}</td>
                                <td className="py-2 px-4 border-b ">{ele.location}</td>
                                <td className="py-2 px-4 border-b text-center">{ele.applicants}</td>
                                <td className="py-2 px-4 border-b text-center"><input type="checkbox" /></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end ">
                <button className="bg-black text-white px-4 py-2 rounded" onClick={()=>navigate('/dashboard/add-job')}>Add new Job</button>
            </div>
        </div>
    )
}

export default ManageJobs;