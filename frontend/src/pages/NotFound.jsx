import { Link } from "react-router-dom";

function NotFound() {

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "#f8f9fa"
            }}
        >

            <div className="text-center">

                <h1
                    className="display-1 text-danger fw-bold"
                >
                    404
                </h1>

                <h2 className="mb-3">
                    Page Not Found
                </h2>

                <p className="text-muted">

                    Sorry, the page you are looking for doesn't exist.

                </p>

                <Link
                    to="/"
                    className="btn btn-primary mt-3"
                >
                    Back to Home
                </Link>

            </div>

        </div>

    );

}

export default NotFound;