import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {

        
        e.preventDefault();

        try {

            const response = await API.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("email", response.data.email);

            if (response.data.role === "Admin") {
            navigate("/admin");
            } else if (response.data.role === "Recruiter") {
                navigate("/recruiter");
            } else {
                navigate("/dashboard");
            }

        } catch (error) {

            alert("Invalid Email or Password");

        }

    };

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                height: "100vh",
                background: "linear-gradient(to right,#4facfe,#00f2fe)"
            }}
        >

            <div
                className="card shadow-lg p-4"
                style={{
                    width: "420px",
                    borderRadius: "20px"
                }}
            >

                <div className="text-center">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        width="90"
                        alt="User"
                    />

                    <h2 className="mt-3 text-primary">
                        AI Job Portal
                    </h2>

                    <p className="text-muted">
                        Login to Continue
                    </p>

                </div>

                <form onSubmit={login}>

                    <div className="mb-3">

                        <label>Email</label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label>Password</label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>

                    <button
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

                <hr />

                <p className="text-center text-muted">

                    AI Powered Resume Screening &
                    Job Recommendation Portal

                </p>

            </div>

        </div>

    );

}

export default Login;