import { useState } from "react";

function Contact() {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {

        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });

    };

    const sendMessage = (e) => {

        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        setContact({
            name: "",
            email: "",
            message: ""
        });

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body">

                            <h2 className="text-center text-primary mb-4">
                                📞 Contact Us
                            </h2>

                            <form onSubmit={sendMessage}>

                                <div className="mb-3">

                                    <label>Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={contact.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={contact.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label>Message</label>

                                    <textarea
                                        rows="5"
                                        className="form-control"
                                        name="message"
                                        value={contact.message}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Contact;