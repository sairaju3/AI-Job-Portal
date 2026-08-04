import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JobsList() {

    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    const resumeId = localStorage.getItem("resumeId");

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {

        try {

            let url = "http://localhost:8080/api/jobs";

            // Recruiter should only see their own jobs
            if (role === "Recruiter") {
                const email = localStorage.getItem("email");
                url = `http://localhost:8080/api/jobs/recruiter/${email}`;
            }

            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setJobs(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to Load Jobs");

        }
    };

    const deleteJob = async (id) => {

        try {

            await axios.delete(
                `http://localhost:8080/api/jobs/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Job Deleted Successfully");
            loadJobs();

        } catch (error) {

            console.log(error);
            alert("Delete Failed");

        }

    };

    const applyJob = async (jobId) => {

        try {

            await axios.post(
                `http://localhost:8080/api/applications/apply?userId=${userId}&jobId=${jobId}&resumeId=${resumeId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Application Submitted Successfully");

        } catch (error) {

            console.log(error);
            alert("Application Failed");

        }

    };

    return (

        <div className="container mt-5">

            <h2>All Jobs</h2>

            <div className="row mt-4">

    {jobs.map((job) => (

        <div className="col-md-6 col-lg-4 mb-4" key={job.id}>

            <div className="card shadow-lg border-0 rounded-4 h-100">

                <div className="card-body">

                    <h4 className="text-primary">{job.title}</h4>

                    <h6 className="text-muted">{job.company}</h6>

                    <hr />

                    <p>
                        <strong>📍 Location:</strong> {job.location}
                    </p>

                    <p>
                        <strong>💰 Salary:</strong> ₹ {job.salary}
                    </p>

                    <p>
                        <strong>📝 Description:</strong>
                    </p>

                    <p className="text-muted">
                        {job.description}
                    </p>

                    <p>
                        <strong>🛠 Skills:</strong>
                    </p>

                    <span className="badge bg-primary me-2">
                        {job.skills}
                    </span>

                </div>

                <div className="card-footer bg-white border-0">

                    {role === "User" && (

                        <button
                            className="btn btn-success w-100"
                            onClick={() => applyJob(job.id)}
                        >
                            🚀 Apply Now
                        </button>

                    )}

                    {(role === "Recruiter" || role === "Admin") && (

                        <div className="d-flex justify-content-between">

                            <button
                                className="btn btn-warning"
                                onClick={() => navigate(`/edit-job/${job.id}`)}
                            >
                                ✏️ Edit
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={() => deleteJob(job.id)}
                            >
                                🗑 Delete
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </div>

    ))}

</div>

        </div>

    );
}

export default JobsList;