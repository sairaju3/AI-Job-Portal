import { useState } from "react";
import axios from "axios";

function UploadResume() {

    const [file, setFile] = useState(null);

    const uploadResume = async (e) => {

        e.preventDefault();

        if (!file) {
            alert("Please select a resume.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {

            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://localhost:8080/api/resumes/upload",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            localStorage.setItem("resumeId", response.data.id);

            alert("✅ Resume Uploaded Successfully");

        } catch (error) {

            console.log(error);
            alert("Upload Failed");

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body text-center">

                            <h2 className="text-primary mb-4">
                                📄 Upload Resume
                            </h2>

                            <p className="text-muted">
                                Upload your latest resume in PDF or DOCX format.
                            </p>

                            <form onSubmit={uploadResume}>

                                <input
                                    type="file"
                                    className="form-control mb-4"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />

                                <button
                                    className="btn btn-success w-100"
                                >
                                    Upload Resume
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default UploadResume;