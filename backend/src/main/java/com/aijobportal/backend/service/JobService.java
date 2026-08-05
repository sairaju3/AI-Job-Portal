package com.aijobportal.backend.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aijobportal.backend.entity.Job;
import com.aijobportal.backend.repository.JobRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    // Add Job
    public Job addJob(Job job, String recruiterEmail) {

        job.setPostedDate(LocalDate.now());
        job.setRecruiterEmail(recruiterEmail);

        return jobRepository.save(job);
    }   public Job addJob(Job job) {

        job.setPostedDate(LocalDate.now());

        return jobRepository.save(job);
    }

    // Get All Jobs
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // Get Job By ID
    public Job getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));
    }

    // Update Job
    public Job updateJob(Long id, Job updatedJob) {

        Job job = getJobById(id);

        job.setTitle(updatedJob.getTitle());
        job.setCompany(updatedJob.getCompany());
        job.setLocation(updatedJob.getLocation());
        job.setSalary(updatedJob.getSalary());
        job.setDescription(updatedJob.getDescription());
        job.setSkills(updatedJob.getSkills());

        return jobRepository.save(job);
    }

    // Delete Job
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
    
    public List<Job> searchByTitle(String title) {
        return jobRepository.findByTitleContainingIgnoreCase(title);
    }

    public List<Job> searchByLocation(String location) {
        return jobRepository.findByLocationContainingIgnoreCase(location);
    }

    public List<Job> searchBySkills(String skills) {
        return jobRepository.findBySkillsContainingIgnoreCase(skills);
    }
    
    
    public List<Job> getRecruiterJobs(String email) {
        return jobRepository.findByRecruiterEmail(email);
    }
}