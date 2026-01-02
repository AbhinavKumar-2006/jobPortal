import { useState } from "react";
import { assets, JobCategories, JobLocations } from "../assets/assets";

const AddJob = ()=>{
    const [title , settitle] = useState('');
    const [location , setlocation] = useState('Bangalore');
    const [category , setcategory] = useState('Programming');
    const [level , setlevel] = useState('Beginner level');
    const [salary , setsalary] = useState(0);

    return (
        <form className="container p-4 flex-col w-full items-start gap-3">
            <div className="w-full">
                <p className="mb-2">Job Title</p>
                <input className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded" type="text" placeholder="type here" onChange={(e)=>settitle(e.target.value)} value={title} required />

            </div>
            <div className="w-full max-w-lg">
                <p className="my-2">Job Description</p>
                <div>
                    {/* will add edit ref later */}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div>
                    <p className="mb-2">Job Category</p>
                    <select className="w-full px-3 py-2 border-2 border-gray-300 rounded" onChange={e => setcategory(e.target.value)}>
                        {JobCategories.map((ele,i)=>{
                            return <option key={i} value={ele}>{ele}</option>
                        })}
                    </select>
                </div>
                <div>
                    <p className="mb-2">Job Location</p>
                    <select className="w-full px-3 py-2 border-2 border-gray-300 rounded" onChange={e => setlocation(e.target.value)}>
                        {JobLocations.map((ele,i)=>{
                            return <option key={i} value={ele}>{ele}</option>
                        })}
                    </select>
                </div>
                <div>
                    <p className="mb-2">Job level</p>
                    <select className="w-full px-3 py-2 border-2 border-gray-300 rounded" onChange={e => setlevel(e.target.value)}>
                        <option value="Beginner level">Beginner level</option>
                        <option value="Intermediate level">Intermediate level</option>
                        <option value="Senior level">Senior level</option>
                    </select>
                </div>
            </div>
            <div>
                <p className="mb-2">Salary</p>
                <input min={0} className=" px-3 border-2 border-gray-300 rounded " type="number" placeholder="salary" onChange={(e)=>setsalary(e.target.value)}/>
            </div>
            <button className="w-28 py-3 mt-4 bg-black text-white rounded-lg">ADD</button>
        </form>
    )
}
export default AddJob;