import { useState } from "react";
import axios from "axios";

function JobMatch() {

    const [jobId, setJobId] = useState("");
    const [result, setResult] = useState(null);

    const matchJob = async () => {

        if (!jobId) {
            alert("Please enter Job ID");
            return;
        }

        try {

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first");
                return;
            }

            const response = await axios.get(
                `https://ai-job-portal-xx67.onrender.com/api/job-match/match/${jobId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setResult(response.data);

        } catch (error) {

            console.log(error);

            if (error.response) {
                alert(
                    error.response.data?.message ||
                    "Job Match Failed"
                );
            } else {
                alert("Unable to connect to server");
            }
        }
    };

    return (

        <div className="container mt-5">

            <div className="card shadow-lg border-0 rounded-4">

                <div className="card-body">

                    <h2 className="text-center text-primary mb-4">
                        🤖 AI Job Match
                    </h2>

                    <div className="row justify-content-center">

                        <div className="col-md-8">

                            <input
                                type="number"
                                className="form-control mb-3"
                                placeholder="Enter Job ID"
                                value={jobId}
                                onChange={(e) => setJobId(e.target.value)}
                            />

                        </div>

                    </div>

                    <button
                        className="btn btn-primary w-100"
                        onClick={matchJob}
                    >
                        🔍 Match Resume
                    </button>

                    {result && (

                        <div className="card mt-5 shadow border-0">

                            <div className="card-body">

                                <h3 className="text-success">
                                    {result.jobTitle}
                                </h3>

                                <h5 className="text-muted">
                                    {result.company}
                                </h5>

                                <hr />

                                <h4 className="text-center">
                                    Match Score
                                </h4>

                                <div
                                    className="progress mb-4"
                                    style={{ height: "30px" }}
                                >

                                    <div
                                        className="progress-bar bg-success"
                                        style={{
                                            width: `${result.matchPercentage}%`
                                        }}
                                    >
                                        {result.matchPercentage}%
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-6">

                                        <div className="card border-success">

                                            <div className="card-header bg-success text-white">
                                                ✅ Matching Skills
                                            </div>

                                            <div className="card-body">

                                                <ul>
                                                    {result.matchingSkills &&
                                                        result.matchingSkills.map(
                                                            (skill, index) => (
                                                                <li key={index}>
                                                                    {skill}
                                                                </li>
                                                            )
                                                        )
                                                    }
                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="card border-danger">

                                            <div className="card-header bg-danger text-white">
                                                ❌ Missing Skills
                                            </div>

                                            <div className="card-body">

                                                <ul>
                                                    {result.missingSkills &&
                                                        result.missingSkills.map(
                                                            (skill, index) => (
                                                                <li key={index}>
                                                                    {skill}
                                                                </li>
                                                            )
                                                        )
                                                    }
                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );
}

export default JobMatch;