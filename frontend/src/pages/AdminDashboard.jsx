import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        totalUsers: 0,
        totalRecruiters: 0,
        totalJobs: 0,
        totalApplications: 0,
        totalResumes: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:8080/api/admin/dashboard",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setData(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to load dashboard");

        }

    };

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (

        <div className="container mt-4">

            {/* Welcome */}

            <div className="card bg-dark text-white shadow-lg border-0 rounded-4 mb-4">

                <div className="card-body">

                    <h2>👑 Admin Dashboard</h2>

                    <p className="mb-0">
                        Manage the entire AI Job Portal
                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="row g-4">

                <div className="col-md-4">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body text-center">
                            <h1>👥</h1>
                            <h5>Total Users</h5>
                            <h2>{data.totalUsers}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body text-center">
                            <h1>💼</h1>
                            <h5>Total Recruiters</h5>
                            <h2>{data.totalRecruiters}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body text-center">
                            <h1>📄</h1>
                            <h5>Total Jobs</h5>
                            <h2>{data.totalJobs}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body text-center">
                            <h1>📬</h1>
                            <h5>Total Applications</h5>
                            <h2>{data.totalApplications}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body text-center">
                            <h1>📂</h1>
                            <h5>Total Resumes</h5>
                            <h2>{data.totalResumes}</h2>
                        </div>
                    </div>
                </div>

            </div>

            {/* Actions */}

            <div className="row mt-5">

                <div className="col-md-6">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h3>👥 Manage Users</h3>

                            <p>
                                View, search and remove users.
                            </p>

                            <button
                                className="btn btn-primary w-100"
                                onClick={() => navigate("/manage-users")}
                            >
                                Manage Users
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h3>💼 Manage Jobs</h3>

                            <p>
                                View all available jobs.
                            </p>

                            <button
                                className="btn btn-success w-100"
                                onClick={() => navigate("/jobs")}
                            >
                                View Jobs
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <div className="text-center mt-5">

                <button
                    className="btn btn-danger btn-lg px-5"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </div>

    );
}

export default AdminDashboard;