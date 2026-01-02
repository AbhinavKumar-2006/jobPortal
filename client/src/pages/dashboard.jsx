import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = ()=>{
    const navigate = useNavigate();
 
    return (
        <div className="min-h-screen"> 
            {/* navbar for recruiter panel */}
            <div className="shadow py-4">
                <div className="px-5 flex justify-between items-center">
                    <img onClick={(e)=>navigate("/")} className="cursor-pointer" src={assets.logo} alt="logo" />
                    <div className="flex items-center gap-3 px-5">
                        <p>Welcome</p>
                        <div className="relative group">
                            <img className="w-8 border rounded-full " src={assets.company_icon} alt="company icon" />
                            <div className="hidden group-hover:block absolute top-0 right-0 pt-12 z-10 text-black rounded">
                                <ul className="list-none m-0 p-2 bg-white rounded-md border border-gray-400 text-sm">
                                    <li className="py-1 px-2 cursor-pointer text-center">Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex ">
                {/* left side bar with 3 options */}
                <div className="inline-block min-h-screen border-r-2">
                    <ul className="flex flex-col items-start pt-5 text-gray-800">
                        <NavLink to={"/dashboard/add-job"} className={({isActive}) => `flex items-center p-3 gap-2 w-full hover:bg-gray-100 ${isActive&&'bg-blue-100 border-r-4 border-blue-500'}`}>
                            <img src={assets.add_icon} alt="add icon" className="min-w-4"/>
                            <p>Add Job</p>
                        </NavLink>

                        <NavLink to={"/dashboard/manage-job"} className={({isActive}) => `flex items-center p-3 gap-2 w-full hover:bg-gray-100 ${isActive&&'bg-blue-100 border-r-4 border-blue-500'}`}>
                            <img src={assets.home_icon} alt="add icon" />
                            <p>Manage Jobs</p>
                        </NavLink>

                        <NavLink to={"/dashboard/view-application"} className={({isActive}) => `flex items-center p-3 gap-2 w-full hover:bg-gray-100 ${isActive&&'bg-blue-100 border-r-4 border-blue-500'}`}>
                            <img src={assets.person_tick_icon} alt="add icon" />
                            <p>View-Application</p>
                        </NavLink>
                    </ul>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;