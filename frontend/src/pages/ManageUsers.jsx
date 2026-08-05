import { useEffect, useState } from "react";
import axios from "axios";

function ManageUsers() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "https://ai-job-portal-xx67.onrender.com/api/users",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setUsers(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to load users");

        }

    };

    const deleteUser = async (id) => {

        if (!window.confirm("Are you sure you want to delete this user?")) {
            return;
        }

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `https://ai-job-portal-xx67.onrender.com/api/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("✅ User Deleted Successfully");

            loadUsers();

        } catch (error) {

            console.log(error);
            alert("Delete Failed");

        }

    };

    const filteredUsers = users.filter((user) => {

        const fullName = user.fullName || "";
        const email = user.email || "";

        return (
            fullName.toLowerCase().includes(search.toLowerCase()) ||
            email.toLowerCase().includes(search.toLowerCase())
        );

    });

    return (

        <div className="container mt-5">

            <div className="card shadow-lg border-0 rounded-4">

                <div className="card-body">

                    <h2 className="text-center text-primary mb-4">
                        👥 Manage Users
                    </h2>

                    <input
                        className="form-control mb-4"
                        placeholder="🔍 Search by Name or Email"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="table-responsive">

                        <table className="table table-hover table-striped align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filteredUsers.map((user) => (

                                    <tr key={user.id}>

                                        <td>{user.id}</td>

                                        <td>{user.fullName}</td>

                                        <td>{user.email}</td>

                                        <td>

                                            <span
                                                className={`badge ${
                                                    user.role === "Admin"
                                                        ? "bg-danger"
                                                        : user.role === "Recruiter"
                                                        ? "bg-warning text-dark"
                                                        : "bg-success"
                                                }`}
                                            >
                                                {user.role}
                                            </span>

                                        </td>

                                        <td>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => deleteUser(user.id)}
                                            >
                                                🗑 Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ManageUsers;