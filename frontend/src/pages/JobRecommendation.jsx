import { useState } from "react";
import axios from "axios";

function JobRecommendation() {

    const [resumeId, setResumeId] = useState("");
    const [jobs, setJobs] = useState([]);

    const recommendJobs = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                `http://localhost:8080/api/job-match/recommend/${resumeId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setJobs(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to fetch job recommendations");

        }

    };

    return (

        <div className="container mt-5">

            <div className="card shadow-lg border-0 rounded-4">

                <div className="card-body">

                    <h2 className="text-center text-primary mb-4">
                        🤖 AI Job Recommendations
                    </h2>

                    <div className="row justify-content-center">

                        <div className="col-md-6">

                            <input
                                className="form-control mb-3"
                                placeholder="Enter Resume ID"
                                value={resumeId}
                                onChange={(e) => setResumeId(e.target.value)}
                            />

                            <button
                                className="btn btn-success w-100"
                                onClick={recommendJobs}
                            >
                                🔍 Find Recommended Jobs
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <div className="row mt-5">

                {jobs.map((job) => (

                    <div className="col-lg-6 mb-4" key={job.jobId}>

                        <div className="card shadow-lg border-0 rounded-4 h-100">

                            <div className="card-body">

                                <h3 className="text-primary">
                                    {job.jobTitle}
                                </h3>

                                <h5 className="text-muted">
                                    {job.company}
                                </h5>

                                <hr />

                                <h5 className="text-center">
                                    Match Score
                                </h5>

                                <div
                                    className="progress mb-4"
                                    style={{ height: "30px" }}
                                >

                                    <div
                                        className={`progress-bar ${
                                            job.matchPercentage >= 80
                                                ? "bg-success"
                                                : job.matchPercentage >= 60
                                                ? "bg-warning"
                                                : "bg-danger"
                                        }`}
                                        style={{
                                            width: `${job.matchPercentage}%`
                                        }}
                                    >
                                        {job.matchPercentage}%
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-6">

                                        <div className="card border-success mb-3">

                                            <div className="card-header bg-success text-white">

                                                ✅ Matching Skills

                                            </div>

                                            <div className="card-body">

                                                <ul className="mb-0">

                                                    {job.matchingSkills.map((skill, index) => (

                                                        <li key={index}>
                                                            {skill}
                                                        </li>

                                                    ))}

                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="card border-danger mb-3">

                                            <div className="card-header bg-danger text-white">

                                                ❌ Missing Skills

                                            </div>

                                            <div className="card-body">

                                                <ul className="mb-0">

                                                    {job.missingSkills.map((skill, index) => (

                                                        <li key={index}>
                                                            {skill}
                                                        </li>

                                                    ))}

                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="card-footer bg-white border-0">

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    🚀 Apply Now
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default JobRecommendation;