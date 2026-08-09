package com.aijobportal.backend.controller;

import java.io.IOException;

import org.apache.tika.exception.TikaException;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.aijobportal.backend.dto.JobMatchResponse;
import com.aijobportal.backend.entity.Resume;
import com.aijobportal.backend.entity.User;
import com.aijobportal.backend.service.ResumeService;
import com.aijobportal.backend.service.UserService;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/resumes")
public class ResumeController {

    private final ResumeService resumeService;
    private final UserService userService;

    public ResumeController(ResumeService resumeService,
                            UserService userService) {
        this.resumeService = resumeService;
        this.userService = userService;
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Resume uploadResume(
            @RequestParam("file") MultipartFile file,
            Authentication authentication)
            throws IOException, TikaException {

        if (authentication == null) {
            throw new RuntimeException("User is not authenticated");
        }

        String email = authentication.getName();

        User user = userService.findByEmail(email);

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        return resumeService.uploadResume(file, user.getId());
    }	
    
    @GetMapping("/match/{resumeId}/{jobId}")
    public JobMatchResponse matchResume(
            @PathVariable Long resumeId,
            @PathVariable Long jobId) {

        return resumeService.matchResume(resumeId, jobId);
    }
    
    @GetMapping("/download/{resumeId}")
    public ResponseEntity<Resource> downloadResume(@PathVariable Long resumeId)
            throws IOException {

        Resume resume = resumeService.getResumeById(resumeId);

        Path path = Paths.get(resume.getFilePath());

        Resource resource = new UrlResource(path.toUri());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + resume.getFileName() + "\"")
                .body(resource);
    }
}