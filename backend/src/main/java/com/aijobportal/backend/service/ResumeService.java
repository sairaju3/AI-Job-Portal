package com.aijobportal.backend.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.tika.Tika;
import org.apache.tika.exception.TikaException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aijobportal.backend.dto.JobMatchResponse;
import com.aijobportal.backend.entity.Job;
import com.aijobportal.backend.entity.Resume;
import com.aijobportal.backend.repository.JobRepository;
import com.aijobportal.backend.repository.ResumeRepository;

@Service
public class ResumeService {

    private final ResumeRepository resumeRepository;
    
    @Autowired
    private JobRepository jobRepository;

   

    public ResumeService(ResumeRepository resumeRepository) {
        this.resumeRepository = resumeRepository;
    }

    public Resume uploadResume(MultipartFile file, Long userId)
            throws IOException, TikaException {

        String uploadPath = System.getProperty("java.io.tmpdir")
                + File.separator + "uploads";

        File folder = new File(uploadPath);

        if (!folder.exists()) {
            folder.mkdirs();
        }

        if (file.isEmpty()) {
            throw new RuntimeException("Resume file is empty");
        }

        Tika tika = new Tika();
        String resumeText = tika.parseToString(file.getInputStream());

        String originalName = file.getOriginalFilename();

        if (originalName == null || originalName.isBlank()) {
            originalName = "resume.pdf";
        }

        String fileName = System.currentTimeMillis() + "_" + originalName;

        File destination = new File(folder, fileName);

        file.transferTo(destination);

        Resume resume = new Resume();

        resume.setFileName(originalName);
        resume.setFileType(file.getContentType());
        resume.setFilePath(destination.getAbsolutePath());
        resume.setResumeText(resumeText);
        resume.setUserId(userId);

        return resumeRepository.save(resume);
    }
    
    
    public JobMatchResponse matchResume(Long resumeId, Long jobId) {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        List<String> resumeSkills =
                Arrays.stream(resume.getResumeText().toLowerCase().split("[,\\s]+"))
                        .toList();

        List<String> jobSkills =
                Arrays.stream(job.getSkills().toLowerCase().split(","))
                        .map(String::trim)
                        .toList();

        List<String> matched = new ArrayList<>();
        List<String> missing = new ArrayList<>();

        for (String skill : jobSkills) {

            if (resumeSkills.contains(skill.toLowerCase())) {
                matched.add(skill);
            } else {
                missing.add(skill);
            }
        }

        int percentage = (matched.size() * 100) / jobSkills.size();

        JobMatchResponse response = new JobMatchResponse();

        response.setJobTitle(job.getTitle());
        response.setCompany(job.getCompany());
        response.setMatchPercentage(percentage);
        response.setMatchingSkills(matched);
        response.setMissingSkills(missing);

        return response;
    }
    
    public Resume getResumeById(Long resumeId) {

        return resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));
    }
}