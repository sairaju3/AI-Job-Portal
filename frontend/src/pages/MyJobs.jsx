import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JobsList() {

    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {

        try {

            const token = localStorage.getItem("token");

          const email = localStorage.getItem("email");

            const response = await axios.get(
                `https://ai-job-portal-xx67.onrender.com/api/jobs/recruiter/${email}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setJobs(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to Load Jobs");

        }
    };

    const deleteJob = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `https://ai-job-portal-xx67.onrender.com/api/jobs/${id}`,
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

    return (

        <div className="container mt-5">

            <h2>My Posted Jobs</h2>

            <table className="table table-bordered table-striped mt-4">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {jobs.map(job => (

                        <tr key={job.id}>

                            <td>{job.id}</td>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>{job.location}</td>
                            <td>{job.salary}</td>

                            <td>

                                <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => navigate(`/edit-job/${job.id}`)}
                                >
                                Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteJob(job.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default JobsList;