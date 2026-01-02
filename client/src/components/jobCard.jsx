import { assets } from "../assets/assets";
import {Link} from "react-router-dom";

const JobCard = ({job})=>{
    return (
        <div className="border p-6 shadow-xl rounded border-gray-600">
            <div>
                <img src={assets.company_icon} className="h-8" />
            </div>
            <h4 className="font-medium text-xl mt-2">{job.title}</h4>
            <div className="flex items-center gap-3 text-xs w-full flex-wrap">
                <span className="border bg-blue-50 border-blue-200 px-4 py-1.5">{job.location}</span>
                <span className="border bg-red-50 border-red-200 px-4 py-1.5 w-[]">{job.level}</span>
            </div>
            <p className="text-gray-500 text-sm mt-4" dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
            <div className="flex items-center gap-3 mt-2 text-sm flex-wrap">
                <Link to={`/apply-job/${job._id}`} className="bg-blue-600 text-white px-4 py-1.5 rounded" onClick={() => window.scrollTo(0, 0)}>Apply now</Link>
                <Link to={`/apply-job/${job._id}`} className="text-gray-500 border border-gray-500 rounded px-4 py-1.5" onClick={() => window.scrollTo(0, 0)}>Learn more</Link>
            </div>
        </div>
    )
}
export default JobCard;