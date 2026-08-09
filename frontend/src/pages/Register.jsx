import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        role: "User"
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const register = async (e) => {

        e.preventDefault();

        try {

            await API.post("/auth/register", user);

            alert("Registration Successful");

            navigate("/login");

       } catch (error) {

            console.log("Registration Error:", error);
            console.log("Backend Response:", error.response?.data);

            alert(
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Registration Failed"
            );

        }

    };

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right,#1e3c72,#2a5298)"
            }}
        >

            <div
                className="card shadow-lg p-4"
                style={{
                    width: "450px",
                    borderRadius: "20px"
                }}
            >

                <div className="text-center">

                    <h2 className="text-primary">
                        Create Account
                    </h2>

                    <p className="text-muted">
                        Join AI Job Portal
                    </p>

                </div>

                <form onSubmit={register}>

                    <div className="mb-3">

                        <label>Full Name</label>

                        <input
                            type="text"
                            name="fullname"
                            className="form-control"
                            value={user.fullname}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label>Role</label>

                        <select
                            className="form-select"
                            name="role"
                            value={user.role}
                            onChange={handleChange}
                        >

                            <option>User</option>
                            <option>Recruiter</option>

                        </select>

                    </div>

                    <button
                        className="btn btn-success w-100"
                    >
                        Register
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Register;