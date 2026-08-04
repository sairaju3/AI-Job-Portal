function FAQ() {

    const faqs = [
        {
            question: "How do I upload my resume?",
            answer: "Login to your account, go to Dashboard and click 'Upload Resume'."
        },
        {
            question: "How does AI Job Match work?",
            answer: "The system compares your resume skills with job requirements using AI."
        },
        {
            question: "Can I apply for multiple jobs?",
            answer: "Yes. You can apply for multiple jobs, but only once per job."
        },
        {
            question: "How will I know if I'm shortlisted?",
            answer: "You'll receive an email notification when a recruiter updates your application status."
        },
        {
            question: "Can recruiters download resumes?",
            answer: "Yes. Recruiters can securely download resumes from the View Applicants page."
        }
    ];

    return (

        <div className="container mt-5">

            <h2 className="text-center text-primary mb-5">
                Frequently Asked Questions
            </h2>

            <div className="accordion" id="faqAccordion">

                {faqs.map((faq, index) => (

                    <div className="accordion-item" key={index}>

                        <h2 className="accordion-header">

                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq${index}`}
                            >
                                {faq.question}
                            </button>

                        </h2>

                        <div
                            id={`faq${index}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordion"
                        >

                            <div className="accordion-body">

                                {faq.answer}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default FAQ;