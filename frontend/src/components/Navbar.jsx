import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    const logout = () => {

        localStorage.clear();

        navigate("/login");

    };

    if (!token) return null;

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    AI Job Portal
                </Link>

                <div className="navbar-nav ms-auto">

                    {role === "User" && (
                        <>
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            <Link className="nav-link" to="/jobs">Jobs</Link>
                            <Link className="nav-link" to="/upload">Upload Resume</Link>
                            <Link className="nav-link" to="/applications">Applications</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <Link className="nav-link" to="/faq">FAQ</Link>
                        </>
                    )}

                    {role === "Recruiter" && (
                        <>
                            <Link className="nav-link" to="/recruiter">Dashboard</Link>
                            <Link className="nav-link" to="/add-job">Post Job</Link>
                            <Link className="nav-link" to="/my-jobs">My Jobs</Link>
                            <Link className="nav-link" to="/view-applicants">Applicants</Link>
                            <Link className="nav-link" to="/about">About</Link>
                        </>
                    )}

                    {role === "Admin" && (
                        <>
                            <Link className="nav-link" to="/admin">Dashboard</Link>
                            <Link className="nav-link" to="/manage-users">Manage Users</Link>
                        </>
                    )}

                    <button
                        className="btn btn-danger ms-3"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;