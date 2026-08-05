import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddJob() {

    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        skills: ""
    });

    const handleChange = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
        });
    };

    const addJob = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "https://ai-job-portal-xx67.onrender.com/api/jobs",
                job,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("✅ Job Posted Successfully");

            navigate("/my-jobs");

        } catch (error) {

            console.log(error);
            alert("Failed to Post Job");

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body">

                            <h2 className="text-center text-primary mb-4">
                                💼 Post New Job
                            </h2>

                            <form onSubmit={addJob}>

                                <div className="mb-3">
                                    <label>Job Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={job.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Company</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="company"
                                        value={job.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="location"
                                        value={job.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Salary</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="salary"
                                        value={job.salary}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        name="description"
                                        value={job.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="mb-4">
                                    <label>Required Skills</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="skills"
                                        placeholder="Java, Spring Boot, React"
                                        value={job.skills}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    className="btn btn-success w-100"
                                >
                                    🚀 Post Job
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AddJob;