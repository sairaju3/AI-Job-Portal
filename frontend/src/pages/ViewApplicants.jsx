import { useState } from "react";
import axios from "axios";

function ViewApplicants() {

    const [jobId, setJobId] = useState("");
    const [applications, setApplications] = useState([]);

    const loadApplicants = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                `http://localhost:8080/api/applications/job/${jobId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setApplications(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to Load Applicants");

        }

    };

    const updateStatus = async (applicationId, status) => {

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:8080/api/applications/status/${applicationId}?status=${status}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Status Updated Successfully");

            loadApplicants();

        } catch (error) {

            console.log(error);
            alert("Update Failed");

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="text-center text-primary mb-4">
                👥 View Applicants
            </h2>

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <input
                        className="form-control mb-3"
                        placeholder="Enter Job ID"
                        value={jobId}
                        onChange={(e) => setJobId(e.target.value)}
                    />

                    <button
                        className="btn btn-primary w-100 mb-4"
                        onClick={loadApplicants}
                    >
                        Load Applicants
                    </button>

                </div>

            </div>

            <div className="table-responsive">

                <table className="table table-hover table-bordered shadow">

                    <thead className="table-dark">

                        <tr>

                            <th>Application ID</th>
                            <th>User ID</th>
                            <th>Resume ID</th>
                            <th>Status</th>
                            <th>Applied Date</th>
                            <th>Actions</th>
                            <th>Resume</th>

                        </tr>

                    </thead>

                    <tbody>

                        {applications.map((app) => (

                            <tr key={app.id}>

                                <td>{app.id}</td>
                                <td>{app.userId}</td>
                                <td>{app.resumeId}</td>
                                <td>{app.status}</td>
                                <td>{app.appliedDate}</td>

                                <td>

                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() => updateStatus(app.id, "Shortlisted")}
                                    >
                                        Shortlist
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm me-2"
                                        onClick={() => updateStatus(app.id, "Rejected")}
                                    >
                                        Reject
                                    </button>

                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => updateStatus(app.id, "Hired")}
                                    >
                                        Hire
                                    </button>

                                </td>

                                <td>

                                    <button
                                        className="btn btn-dark btn-sm"
                                        onClick={() =>
                                            window.open(
                                                `http://localhost:8080/api/resumes/download/${app.resumeId}`,
                                                "_blank"
                                            )
                                        }
                                    >
                                        Download
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default ViewApplicants;