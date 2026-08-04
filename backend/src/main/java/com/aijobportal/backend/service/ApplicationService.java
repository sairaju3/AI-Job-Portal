package com.aijobportal.backend.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aijobportal.backend.entity.Application;
import com.aijobportal.backend.entity.User;
import com.aijobportal.backend.repository.ApplicationRepository;
import com.aijobportal.backend.repository.UserRepository;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    public ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public Application applyJob(Long userId, Long jobId, Long resumeId) {

        if (applicationRepository.existsByUserIdAndJobId(userId, jobId)) {
            throw new RuntimeException("You have already applied for this job.");
        }

        Application application = new Application();

        application.setUserId(userId);
        application.setJobId(jobId);
        application.setResumeId(resumeId);
        application.setStatus("Applied");
        application.setAppliedDate(LocalDate.now());

        return applicationRepository.save(application);
    }
    
    public List<Application> getApplications(Long userId) {

        return applicationRepository.findByUserId(userId);

    }
    
    public List<Application> getApplicants(Long jobId) {
        return applicationRepository.findByJobId(jobId);
    }
    
    public List<Application> getApplicationsByJob(Long jobId) {
        return applicationRepository.findByJobId(jobId);
    }
    
    public Application updateStatus(Long applicationId, String status) {

        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        application.setStatus(status);

        applicationRepository.save(application);

        User user = userRepository.findById(application.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String subject = "";
        String body = "";

        if (status.equals("Shortlisted")) {

            subject = "Congratulations! You Have Been Shortlisted";

            body = "Dear " + user.getFullName() + ",\n\n"
                    + "Congratulations! You have been shortlisted for the next round.\n\n"
                    + "Regards,\nAI Job Portal";

        } else if (status.equals("Rejected")) {

            subject = "Application Update";

            body = "Dear " + user.getFullName() + ",\n\n"
                    + "Thank you for applying.\n"
                    + "Unfortunately, your application was not selected.\n\n"
                    + "Regards,\nAI Job Portal";

        } else if (status.equals("Hired")) {

            subject = "Congratulations! You Have Been Selected";

            body = "Dear " + user.getFullName() + ",\n\n"
                    + "Congratulations! You have been selected.\n"
                    + "Our HR team will contact you soon.\n\n"
                    + "Regards,\nAI Job Portal";
        }

        emailService.sendEmail(user.getEmail(), subject, body);

        return application;
    }
    
}