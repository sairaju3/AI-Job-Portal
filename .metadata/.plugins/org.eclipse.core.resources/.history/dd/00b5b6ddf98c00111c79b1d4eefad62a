package com.aijobportal.backend.controller;

import org.springframework.web.bind.annotation.*;

import com.aijobportal.backend.dto.ResumeAnalysisResponse;
import com.aijobportal.backend.entity.Resume;
import com.aijobportal.backend.repository.ResumeRepository;
import com.aijobportal.backend.service.AIResumeService;

@RestController
@RequestMapping("/api/resumes")
public class ResumeAnalysisController {

    private final AIResumeService aiResumeService;
    private final ResumeRepository resumeRepository;

    public ResumeAnalysisController(AIResumeService aiResumeService,
                                    ResumeRepository resumeRepository) {
        this.aiResumeService = aiResumeService;
        this.resumeRepository = resumeRepository;
    }

    @GetMapping("/analyze/{id}")
    public ResumeAnalysisResponse analyzeResume(@PathVariable Long id) throws Exception {

        Resume resume = resumeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        return aiResumeService.analyzeResume(resume.getFilePath());
    }
    @GetMapping("/test")
    public String test() {
        return "Resume Analysis Controller Working";
    }
}