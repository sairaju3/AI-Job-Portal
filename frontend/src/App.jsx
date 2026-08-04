import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import JobMatch from "./pages/JobMatch";
import JobRecommendation from "./pages/JobRecommendation";
import MyApplications from "./pages/MyApplications";
import AddJob from "./pages/AddJob";
import JobsList from "./pages/JobsList";
import EditJob from "./pages/EditJob";
import AdminDashboard from "./pages/AdminDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import ManageUsers from "./pages/ManageUsers";
import MyJobs from "./pages/MyJobs";
import ViewApplicants from "./pages/ViewApplicants";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";


function App() {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    return (

        <>

            {token && <Navbar />}

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />

                <Route
                    path="/dashboard"
                    element={
                        token && role === "User"
                            ? <Dashboard />
                            : <Navigate to="/login" />
                    }
                />
                <Route 
                  path="/register" 
                  element={<Register />} 
                />

                <Route
                    path="/upload"
                    element={token ? <UploadResume /> : <Navigate to="/login" />}
                />

                <Route
                    path="/analysis"
                    element={token ? <ResumeAnalysis /> : <Navigate to="/login" />}
                />

                <Route
                    path="/match"
                    element={token ? <JobMatch /> : <Navigate to="/login" />}
                />

                <Route
                    path="/recommend"
                    element={token ? <JobRecommendation /> : <Navigate to="/login" />}
                />

                <Route
                    path="/applications"
                    element={token ? <MyApplications /> : <Navigate to="/login" />}
                />

                <Route
                    path="/add-job"
                    element={token ? <AddJob /> : <Navigate to="/login" />}
                />

                <Route
                    path="/jobs"
                    element={token ? <JobsList /> : <Navigate to="/login" />}
                />

                <Route
                    path="/edit-job/:id"
                    element={token ? <EditJob /> : <Navigate to="/login" />}
                />

                <Route
                    path="/admin"
                    element={
                        token && role === "Admin"
                            ? <AdminDashboard />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/recruiter"
                    element={
                        token && role === "Recruiter"
                            ? <RecruiterDashboard />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/manage-users"
                    element={
                        token && role === "Admin"
                            ? <ManageUsers />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/my-jobs"
                    element={
                        token && role === "Recruiter"
                            ? <MyJobs />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/view-applicants"
                    element={
                        token && role === "Recruiter"
                            ? <ViewApplicants />
                            : <Navigate to="/login" />
                    }
                />

            </Routes>

            <Footer />

        </>

    );

}

export default App;