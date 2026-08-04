import { useState } from "react";
import axios from "axios";

function ResumeAnalysis() {

    const [resumeId, setResumeId] = useState("");
    const [analysis, setAnalysis] = useState("");

    const analyzeResume = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                `http://localhost:8080/api/resumes/analyze/${resumeId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setAnalysis(response.data);

        } catch (error) {

            console.log(error);
            alert("Resume Analysis Failed");

        }

    };

    return (

        <div className="container mt-5">

            <div className="card shadow-lg border-0 rounded-4">

                <div className="card-body">

                    <h2 className="text-center text-primary mb-4">
                        🤖 AI Resume Analysis
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
                                className="btn btn-primary w-100"
                                onClick={analyzeResume}
                            >
                                Analyze Resume
                            </button>

                        </div>

                    </div>

                    {analysis && (

                        <div className="card mt-5 border-success">

                            <div className="card-header bg-success text-white">

                                AI Analysis Report

                            </div>

                            <div className="card-body">

                                <pre
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        fontSize: "16px"
                                    }}
                                >
                                    {analysis}
                                </pre>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default ResumeAnalysis;