import { assets } from "../assets/assets"
import { useClerk , UserButton , useUser } from "@clerk/clerk-react"; //to create pop up for login
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";
const Navbar = () => {
    console.log("nav bar re-render");
    const {openSignIn} = useClerk();
    const {user} = useUser();
    const navigate = useNavigate();
    const {setshowRecruiterLogin} = useContext(AppContext);
    const Login  = ()=><div className="flex gap-4">
                    <button onClick={event=>setshowRecruiterLogin(true)} className="text-gray-600 cursor-pointer">Recruiter Login</button>
                    <button onClick={openSignIn} className="bg-blue-600 text-white px-8 rounded-full py-2 hover:cursor-pointer">Login</button>
                    </div> 
    
    return (
        <div className="shadow py-4">
            <div className="container px-4 mx-auto flex justify-between items-center">
                <img src={assets.logo} onClick={()=>navigate('/')} className="cursor-pointer"></img>
                {
                    user?
                    <div className="flex gap-4 items-center">
                            <Link to={'/applications'}>Applied Jobs</Link>
                            <p>|</p>
                            <p>Hi, {user.firstName}</p>
                            <UserButton/>
                    </div>
                    :
                    <Login/>
                }
                
            </div>
        </div>
    )
}
export default Navbar;