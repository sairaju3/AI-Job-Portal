package com.aijobportal.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aijobportal.backend.entity.Job;
import com.aijobportal.backend.service.JobService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/api/jobs")
@SecurityRequirement(name = "BearerAuth")
public class JobController {

    @Autowired
    private JobService jobService;

    // Add Job
    @PostMapping
    public Job addJob(
            @RequestBody Job job,
            @RequestParam String recruiterEmail) {

        return jobService.addJob(job, recruiterEmail);
    }

    // Get All Jobs
    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    // Get Job By ID
    @GetMapping("/{id}")
    public Job getJobById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }

    // Update Job
    @PutMapping("/{id}")
    public Job updateJob(@PathVariable Long id, @RequestBody Job job) {
        return jobService.updateJob(id, job);
    }

    // Delete Job
    @DeleteMapping("/{id}")
    public String deleteJob(@PathVariable Long id) {
        jobService.deleteJob(id);
        return "Job deleted successfully";
    }
    
    @GetMapping("/search/title")
    public List<Job> searchByTitle(@RequestParam String title) {
        return jobService.searchByTitle(title);
    }

    @GetMapping("/search/location")
    public List<Job> searchByLocation(@RequestParam String location) {
        return jobService.searchByLocation(location);
    }

    @GetMapping("/search/skills")
    public List<Job> searchBySkills(@RequestParam String skills) {
        return jobService.searchBySkills(skills);
    }
    
    @GetMapping("/recruiter/{email}")
    public List<Job> getRecruiterJobs(@PathVariable String email) {
        return jobService.getRecruiterJobs(email);
    }
}