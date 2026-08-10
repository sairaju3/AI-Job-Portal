package com.aijobportal.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;
import com.aijobportal.backend.entity.User;
import com.aijobportal.backend.service.UserService;
import com.aijobportal.backend.dto.JobMatchResponse;
import com.aijobportal.backend.entity.Job;
import com.aijobportal.backend.entity.Resume;
import com.aijobportal.backend.repository.JobRepository;
import com.aijobportal.backend.repository.ResumeRepository;
import com.aijobportal.backend.service.JobMatchService;

@RestController
@RequestMapping("/api/job-match")
public class JobMatchController  {

    private final ResumeRepository resumeRepository;
    private final JobRepository jobRepository;
    private final JobMatchService jobMatchService;
    private final UserService userService;

    public JobMatchController(
            ResumeRepository resumeRepository,
            JobRepository jobRepository,
            JobMatchService jobMatchService,
            UserService userService) {

        this.resumeRepository = resumeRepository;
        this.jobRepository = jobRepository;
        this.jobMatchService = jobMatchService;
        this.userService = userService;
    }

    @GetMapping("/match/{jobId}")
    public JobMatchResponse matchResume(
            @PathVariable Long jobId,
            Authentication authentication) throws Exception {

        String email = authentication.getName();

        User user = userService.findByEmail(email);

        Resume resume = resumeRepository
                .findFirstByUserIdOrderByIdDesc(user.getId())
                .orElseThrow(() ->
                        new RuntimeException("Please upload your resume first"));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        return jobMatchService.matchResumeWithJob(resume, job);
    }
    
    @GetMapping("/recommend")
    public List<JobMatchResponse> recommendJobs(
            Authentication authentication) throws Exception {

        String email = authentication.getName();

        User user = userService.findByEmail(email);

        Resume resume = resumeRepository
                .findFirstByUserIdOrderByIdDesc(user.getId())
                .orElseThrow(() ->
                        new RuntimeException("Please upload your resume first"));

        return jobMatchService.matchResumeWithAllJobs(resume.getId());
    }
}