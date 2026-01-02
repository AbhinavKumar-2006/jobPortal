import React, { useContext } from "react";
import { Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import ApplyJob from "./pages/applyJob";
import Applications from "./pages/applications";
import { AppContext } from "./context/appContext";
import RecruiterLogin from "./components/recruiterLogin";
import Dashboard from "./pages/dashboard";
import AddJob from "./pages/addJob";
import ManageJobs from "./pages/manageJobs";
import ViewApplication from "./pages/viewApplications";
const App = () => {
  const {showRecruiterLogin} = useContext(AppContext);
  return (

    <div>
      {/* use of && -> when showRecruiterLogin will be true then <RecruiterLogin/> will be rendered */}
      {showRecruiterLogin&&<RecruiterLogin/>} 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/apply-job/:id" element={<ApplyJob></ApplyJob>}></Route>
        <Route path="/applications" element={<Applications/>}></Route>  
        <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="add-job" element={<AddJob/>}></Route>
            <Route path="manage-job" element={<ManageJobs/>}></Route>
            <Route path="view-application" element={<ViewApplication/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}
export default App;