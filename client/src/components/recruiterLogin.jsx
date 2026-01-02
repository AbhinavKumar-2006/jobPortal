import { useContext, useEffect, useState } from "react"
import { assets } from "../assets/assets";
import { AppContext } from "../context/appContext";

const RecruiterLogin = ()=>{
    const [state , setstate] = useState('login');
    const [name , setname] = useState('');
    const [password , setpassword] = useState('');
    const [email , setemail] = useState('');
    const [image , setimage] = useState(false);
    const [isTextDataSubmitted , setisTextDataSubmitted] = useState(false);
    const onSubmitHanlder = (e)=>{
        e.preventDefault(); //prevent refresh
        if(state === 'signup' && !isTextDataSubmitted) setisTextDataSubmitted(true);
    }
    const {setshowRecruiterLogin} = useContext(AppContext);
    useEffect(()=>{
        document.body.style.overflow = "hidden";  
        return ()=>{
            document.body.style.overflow = "unset"; //Right before the component disappears from the screen, React calls that return function.
        }  
    } , []);
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <form onSubmit={onSubmitHanlder} className="relative bg-white p-10 rounded-xl text-slate-500">
                <h1 className="text-center text-2xl text-neutral-700 font-medium">Recruiter {state}</h1>
                <p className="text-sm">Welcome Back! Please {state} to continue</p>
                {state === 'signup' && isTextDataSubmitted ? 
                
                    <>
                        <div className="flex items-center gap-4 my-10"> 
                            <label htmlFor="image">
                                <img className=" w-16 rounded-full h-16"src={image?URL.createObjectURL(image) : assets.upload_area} alt="" />
                                <input type="file" hidden id="image" onChange={e=>{setimage(e.target.files[0]); console.log(image)}}/>
                            </label>
                            <p>Uplpad Company <br /> logo</p>
                        </div>
                    </> 
                : 
                
                <>
                    {state != 'login' && <div className="flex border px-4 items-center gap-2 py-3 mt-5 border-gray-400 rounded-full" >
                        <img src={assets.person_icon} alt="person icon" />
                        <input required className="outline-none text-sm" type="text" placeholder="company name" onChange={e=>setname(e.target.value)} value={name}/>
                    </div>}
                    
                    <div className="flex border px-4 items-center gap-2 py-3 mt-5 border-gray-400 rounded-full" >
                        <img src={assets.email_icon} alt="email icon" />
                        <input required className="outline-none text-sm" type="email" placeholder="emailID" onChange={e=>setemail(e.target.value)} value={email}/>
                    </div>
                    <div className="flex border px-4 items-center gap-2 py-3 mt-5 border-gray-400 rounded-full" >
                        <img src={assets.lock_icon} alt="lock icon" />
                        <input required className="outline-none text-sm" type="text" placeholder="password" onChange={e=>setpassword(e.target.value)} value={password}/>
                    </div>
                    {state === 'login' && <p className="text-sm text-blue-600 my-4">Forgot password?</p>}
                    
                </>
                }
                <button type="submit" className="border px-4 w-full bg-blue-600 text-white font-medium py-3 mt-5 border-gray-400 rounded-full">
                    {state === 'login' ? 'Login' :isTextDataSubmitted?'create account':'Next'}
                </button>
                {state === 'login' ? <p className="mt-5 text-center">Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={e=>setstate('signup')}>Sign up</span></p> :<p className="mt-5 text-center">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={e=>setstate('login')}>Login</span></p>}
                
                <img onClick={e=>setshowRecruiterLogin(false)} className="top-5 right-5 absolute cursor-pointer" src={assets.cross_icon} alt="close ion" />
            </form>
        </div>
    )
}   
export default RecruiterLogin;