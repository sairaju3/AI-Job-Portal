package com.aijobportal.backend.service;

import org.springframework.stereotype.Service;

import com.aijobportal.backend.dto.AdminDashboardDTO;
import com.aijobportal.backend.repository.ApplicationRepository;
import com.aijobportal.backend.repository.JobRepository;
import com.aijobportal.backend.repository.ResumeRepository;
import com.aijobportal.backend.repository.UserRepository;

@Service
public class AdminService {

    private final UserRepository userRepository;
    private final JobRepository jobRepository;
    private final ResumeRepository resumeRepository;
    private final ApplicationRepository applicationRepository;

    public AdminService(UserRepository userRepository,
                        JobRepository jobRepository,
                        ResumeRepository resumeRepository,
                        ApplicationRepository applicationRepository) {

        this.userRepository = userRepository;
        this.jobRepository = jobRepository;
        this.resumeRepository = resumeRepository;
        this.applicationRepository = applicationRepository;
    }

    public AdminDashboardDTO getDashboard() {

        AdminDashboardDTO dto = new AdminDashboardDTO();

        dto.setTotalUsers(userRepository.countByRole("User"));
        dto.setTotalRecruiters(userRepository.countByRole("Recruiter"));
        dto.setTotalJobs(jobRepository.count());
        dto.setTotalResumes(resumeRepository.count());
        dto.setTotalApplications(applicationRepository.count());

        return dto;
    }
}