import { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {

        try {

            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");

            const response = await axios.get(
                `http://localhost:8080/api/applications/user/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setApplications(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to load applications");

        }

    };

    const getStatusBadge = (status) => {

        switch (status) {

            case "Applied":
                return "bg-primary";

            case "Shortlisted":
                return "bg-warning text-dark";

            case "Rejected":
                return "bg-danger";

            case "Hired":
                return "bg-success";

            default:
                return "bg-secondary";
        }

    };

    return (

        <div className="container mt-5">

            <div className="card shadow-lg border-0 rounded-4">

                <div className="card-body">

                    <h2 className="text-center text-primary mb-4">
                        📬 My Applications
                    </h2>

                    <div className="table-responsive">

                        <table className="table table-hover table-striped align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>Application ID</th>
                                    <th>Job ID</th>
                                    <th>Resume ID</th>
                                    <th>Status</th>
                                    <th>Applied Date</th>

                                </tr>

                            </thead>

                            <tbody>

                                {applications.length > 0 ? (

                                    applications.map((app) => (

                                        <tr key={app.id}>

                                            <td>{app.id}</td>

                                            <td>{app.jobId}</td>

                                            <td>{app.resumeId}</td>

                                            <td>
                                                <span className={`badge ${getStatusBadge(app.status)}`}>
                                                    {app.status}
                                                </span>
                                            </td>

                                            <td>{app.appliedDate}</td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td colSpan="5" className="text-center text-muted">
                                            No Applications Found
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default MyApplications;