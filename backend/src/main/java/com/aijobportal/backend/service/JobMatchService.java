package com.aijobportal.backend.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aijobportal.backend.dto.JobMatchResponse;
import com.aijobportal.backend.entity.Job;
import com.aijobportal.backend.entity.Resume;
import com.aijobportal.backend.repository.JobRepository;
import com.aijobportal.backend.repository.ResumeRepository;

@Service
public class JobMatchService {
	
	@Autowired
	private ResumeRepository resumeRepository;

	@Autowired
	private JobRepository jobRepository;

    public JobMatchResponse matchResumeWithJob(Resume resume, Job job) throws Exception {

    	String resumeText = resume.getResumeText();

    	if (resumeText == null || resumeText.isBlank()) {
    	    throw new RuntimeException("Resume text not found");
    	}

        List<String> jobSkills =
                Arrays.stream(job.getSkills().split(","))
                        .map(String::trim)
                        .toList();

        List<String> matchingSkills = new ArrayList<>();

        for (String skill : jobSkills) {
            if (resumeText.toLowerCase().contains(skill.toLowerCase())) {
                matchingSkills.add(skill);
            }
        }

        List<String> missingSkills = jobSkills.stream()
                .filter(skill -> !matchingSkills.contains(skill))
                .toList();

        JobMatchResponse response = new JobMatchResponse();

        response.setJobId(job.getId());
        response.setJobTitle(job.getTitle());
        response.setCompany(job.getCompany());

        response.setMatchingSkills(matchingSkills);
        response.setMissingSkills(missingSkills);

        int matchPercentage = 0;

        if (!jobSkills.isEmpty()) {
            matchPercentage = (matchingSkills.size() * 100) / jobSkills.size();
        }

        response.setMatchPercentage(matchPercentage);

        return response;
    }
    
    public List<JobMatchResponse> matchResumeWithAllJobs(Long resumeId) throws Exception {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        List<Job> jobs = jobRepository.findAll();

        List<JobMatchResponse> recommendations = new ArrayList<>();

        for (Job job : jobs) {

            JobMatchResponse response = matchResumeWithJob(resume, job);

            recommendations.add(response);
        }

        recommendations.sort(
                (a, b) -> Integer.compare(
                        b.getMatchPercentage(),
                        a.getMatchPercentage()));

        return recommendations;
    }
}