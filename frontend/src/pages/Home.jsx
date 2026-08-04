import { Link } from "react-router-dom";

function Home() {

    return (

        <div>

            {/* Hero Section */}

            <section
                className="text-white"
                style={{
                    background: "linear-gradient(135deg,#0d6efd,#6610f2)",
                    minHeight: "90vh"
                }}
            >

                <div className="container">

                    <div className="row align-items-center" style={{ minHeight: "90vh" }}>

                        <div className="col-md-6">

                            <h1 className="display-3 fw-bold">
                                AI Job Portal
                            </h1>

                            <p className="lead mt-4">

                                Find your dream job using Artificial Intelligence.
                                Upload your resume, get instant job matches,
                                AI recommendations, and apply with one click.

                            </p>

                            <Link
                                to="/register"
                                className="btn btn-warning btn-lg me-3 mt-3"
                            >
                                Get Started
                            </Link>

                            <Link
                                to="/login"
                                className="btn btn-outline-light btn-lg mt-3"
                            >
                                Login
                            </Link>

                        </div>

                        <div className="col-md-6 text-center">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                className="img-fluid"
                                style={{ maxHeight: "420px" }}
                                alt="AI Job Portal"
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* Features */}

            <section className="container py-5">

                <h2 className="text-center mb-5">
                    Why Choose AI Job Portal?
                </h2>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">
                                <h1>🤖</h1>
                                <h4>AI Resume Matching</h4>
                                <p>
                                    Compare your resume with jobs using AI.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">
                                <h1>📄</h1>
                                <h4>Resume Analysis</h4>
                                <p>
                                    Upload your resume and receive instant analysis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">
                                <h1>💼</h1>
                                <h4>Job Recommendations</h4>
                                <p>
                                    Get personalized job recommendations.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* How It Works */}

            <section className="bg-light py-5">

                <div className="container">

                    <h2 className="text-center mb-5">
                        How It Works
                    </h2>

                    <div className="row text-center">

                        <div className="col-md-3">
                            <h1>1️⃣</h1>
                            <h5>Register</h5>
                        </div>

                        <div className="col-md-3">
                            <h1>2️⃣</h1>
                            <h5>Upload Resume</h5>
                        </div>

                        <div className="col-md-3">
                            <h1>3️⃣</h1>
                            <h5>AI Analysis</h5>
                        </div>

                        <div className="col-md-3">
                            <h1>4️⃣</h1>
                            <h5>Apply & Get Hired</h5>
                        </div>

                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section className="container py-5">

                <div className="row text-center">

                    <div className="col-md-3">
                        <h1 className="text-primary">10K+</h1>
                        <h5>Users</h5>
                    </div>

                    <div className="col-md-3">
                        <h1 className="text-success">500+</h1>
                        <h5>Recruiters</h5>
                    </div>

                    <div className="col-md-3">
                        <h1 className="text-warning">2000+</h1>
                        <h5>Jobs</h5>
                    </div>

                    <div className="col-md-3">
                        <h1 className="text-danger">25K+</h1>
                        <h5>Applications</h5>
                    </div>

                </div>

            </section>

        </div>

    );

}

export default Home;