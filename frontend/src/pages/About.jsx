function About() {

    return (

        <div className="container mt-5">

            <div className="text-center mb-5">

                <h1 className="text-primary">
                    About AI Job Portal
                </h1>

                <p className="lead">

                    AI Job Portal is an intelligent recruitment platform
                    designed to connect job seekers with recruiters using
                    Artificial Intelligence.

                </p>

            </div>

            <div className="row">

                <div className="col-md-6">

                    <div className="card shadow border-0 rounded-4 mb-4">

                        <div className="card-body">

                            <h3>🎯 Our Mission</h3>

                            <p>

                                Help candidates find the right job by
                                analyzing resumes and recommending the
                                best matching opportunities.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card shadow border-0 rounded-4 mb-4">

                        <div className="card-body">

                            <h3>🚀 Technologies</h3>

                            <ul>

                                <li>Java</li>
                                <li>Spring Boot</li>
                                <li>Spring Security (JWT)</li>
                                <li>Hibernate</li>
                                <li>MySQL</li>
                                <li>React.js</li>
                                <li>Bootstrap</li>
                                <li>Apache Tika</li>
                                <li>JavaMailSender</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card shadow border-0 rounded-4">

                <div className="card-body">

                    <h3 className="mb-4">✨ Features</h3>

                    <div className="row">

                        <div className="col-md-4">
                            <p>✅ Resume Upload</p>
                            <p>✅ Resume Analysis</p>
                            <p>✅ AI Job Matching</p>
                        </div>

                        <div className="col-md-4">
                            <p>✅ Job Recommendations</p>
                            <p>✅ Email Notifications</p>
                            <p>✅ Recruiter Dashboard</p>
                        </div>

                        <div className="col-md-4">
                            <p>✅ Admin Dashboard</p>
                            <p>✅ Role-Based Login</p>
                            <p>✅ Secure JWT Authentication</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default About;