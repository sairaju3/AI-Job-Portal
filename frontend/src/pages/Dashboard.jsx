import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (

        <div className="container mt-4">

            {/* Welcome Section */}

            <div className="card bg-primary text-white shadow-lg border-0 rounded-4 mb-4">

                <div className="card-body">

                    <h2>👋 Welcome to AI Job Portal</h2>

                    <p className="mb-0">
                        Logged in as <strong>{email}</strong>
                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="row g-4 mb-4">

                <div className="col-md-3">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>📄</h1>

                            <h5>Resume</h5>

                            <p>Upload & Manage</p>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>💼</h1>

                            <h5>Jobs</h5>

                            <p>Browse Jobs</p>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>🤖</h1>

                            <h5>AI Match</h5>

                            <p>Analyze Resume</p>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body text-center">

                            <h1>📬</h1>

                            <h5>Applications</h5>

                            <p>Track Status</p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Action Cards */}

            <div className="row g-4">

                <div className="col-md-4">

                    <div className="card shadow-lg border-0 rounded-4 h-100">

                        <div className="card-body text-center">

                            <h1>📄</h1>

                            <h4>Upload Resume</h4>

                            <p>
                                Upload your latest resume.
                            </p>

                            <button
                                className="btn btn-primary w-100"
                                onClick={() => navigate("/upload")}
                            >
                                Upload Resume
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow-lg border-0 rounded-4 h-100">

                        <div className="card-body text-center">

                            <h1>🤖</h1>

                            <h4>AI Job Match</h4>

                            <p>
                                Match your resume with a specific job.
                            </p>

                            <button
                                className="btn btn-success w-100"
                                onClick={() => navigate("/match")}
                            >
                                Match Resume
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow-lg border-0 rounded-4 h-100">

                        <div className="card-body text-center">

                            <h1>💼</h1>

                            <h4>Available Jobs</h4>

                            <p>
                                Explore the latest job openings.
                            </p>

                            <button
                                className="btn btn-warning w-100 text-white"
                                onClick={() => navigate("/jobs")}
                            >
                                View Jobs
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card shadow-lg border-0 rounded-4 h-100">

                        <div className="card-body text-center">

                            <h1>🎯</h1>

                            <h4>Job Recommendations</h4>

                            <p>
                                AI recommends jobs based on your resume.
                            </p>

                            <button
                                className="btn btn-info w-100 text-white"
                                onClick={() => navigate("/recommend")}
                            >
                                View Recommendations
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card shadow-lg border-0 rounded-4 h-100">

                        <div className="card-body text-center">

                            <h1>📬</h1>

                            <h4>My Applications</h4>

                            <p>
                                Check your application status.
                            </p>

                            <button
                                className="btn btn-secondary w-100"
                                onClick={() => navigate("/applications")}
                            >
                                View Applications
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

export default Dashboard;