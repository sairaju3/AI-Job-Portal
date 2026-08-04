import { useNavigate } from "react-router-dom";

function RecruiterDashboard() {

    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (

        <div className="container mt-4">

            {/* Welcome */}

            <div className="card bg-success text-white shadow-lg border-0 rounded-4 mb-4">

                <div className="card-body">

                    <h2>👋 Recruiter Dashboard</h2>

                    <p className="mb-0">
                        Welcome, <strong>{email}</strong>
                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="row g-4 mb-4">

                <div className="col-md-3">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>💼</h1>

                            <h5>Jobs</h5>

                            <p>Manage Jobs</p>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>👥</h1>

                            <h5>Applicants</h5>

                            <p>View Candidates</p>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>📄</h1>

                            <h5>Resumes</h5>

                            <p>Download CVs</p>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>📧</h1>

                            <h5>Email</h5>

                            <p>Notifications</p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Actions */}

            <div className="row g-4">

                <div className="col-md-6">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>➕</h1>

                            <h4>Post New Job</h4>

                            <p>Create a new job opening.</p>

                            <button
                                className="btn btn-primary w-100"
                                onClick={() => navigate("/add-job")}
                            >
                                Post Job
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>📋</h1>

                            <h4>My Jobs</h4>

                            <p>Edit or delete your posted jobs.</p>

                            <button
                                className="btn btn-success w-100"
                                onClick={() => navigate("/my-jobs")}
                            >
                                My Jobs
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>👥</h1>

                            <h4>View Applicants</h4>

                            <p>Review applications and update status.</p>

                            <button
                                className="btn btn-warning w-100"
                                onClick={() => navigate("/view-applicants")}
                            >
                                View Applicants
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>🔍</h1>

                            <h4>Search Candidates</h4>

                            <p>Browse registered candidates.</p>

                            <button
                                className="btn btn-info w-100 text-white"
                                onClick={() => navigate("/manage-users")}
                            >
                                Search Candidates
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

export default RecruiterDashboard;