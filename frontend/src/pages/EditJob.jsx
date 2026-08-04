import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditJob() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        skills: ""
    });

    useEffect(() => {
        loadJob();
    }, []);

    const loadJob = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                `http://localhost:8080/api/jobs/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setJob(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to Load Job");

        }

    };

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const updateJob = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:8080/api/jobs/${id}`,
                job,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("✅ Job Updated Successfully");

            navigate("/my-jobs");

        } catch (error) {

            console.log(error);
            alert("Update Failed");

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body">

                            <h2 className="text-center text-warning mb-4">
                                ✏️ Edit Job
                            </h2>

                            <form onSubmit={updateJob}>

                                <div className="mb-3">
                                    <label>Job Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={job.title}
                                        onChange={handleChange}
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
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Description</label>
                                    <textarea
                                        rows="4"
                                        className="form-control"
                                        name="description"
                                        value={job.description}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label>Required Skills</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="skills"
                                        value={job.skills}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button className="btn btn-warning w-100">
                                    💾 Update Job
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditJob;