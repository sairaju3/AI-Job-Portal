package com.aijobportal.backend.service;

import java.io.File;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.tika.Tika;
import org.springframework.stereotype.Service;

import com.aijobportal.backend.dto.ResumeAnalysisResponse;

@Service
public class AIResumeService {

    private static final List<String> SKILLS = Arrays.asList(
            "Java",
            "Spring Boot",
            "Hibernate",
            "MySQL",
            "SQL",
            "REST API",
            "Docker",
            "Kubernetes",
            "AWS",
            "Git",
            "React",
            "HTML",
            "CSS",
            "JavaScript"
    );

    public ResumeAnalysisResponse analyzeResume(String filePath) throws Exception {

        Tika tika = new Tika();
        String text = tika.parseToString(new File(filePath));

        ResumeAnalysisResponse response = new ResumeAnalysisResponse();

        String[] lines = text.split("\\r?\\n");

        for (String line : lines) {
            line = line.trim();

            if (!line.isEmpty()) {
                response.setName(line);
                break;
            }
        }
        // Extract Email
        Pattern emailPattern =
                Pattern.compile("[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+");

        Matcher emailMatcher = emailPattern.matcher(text);

        if (emailMatcher.find()) {
            response.setEmail(emailMatcher.group());
        }

        // Extract Phone Number
        Pattern phonePattern =
                Pattern.compile("\\+?\\d[\\d\\s-]{9,}");

        Matcher phoneMatcher = phonePattern.matcher(text);

        if (phoneMatcher.find()) {
        	response.setPhone(phoneMatcher.group().trim());
        }

        // Extract Skills
        List<String> matchingSkills = new ArrayList<>();

        for (String skill : SKILLS) {

            if (text.toLowerCase().contains(skill.toLowerCase())) {

                matchingSkills.add(skill);

            }
        }

        response.setSkills(matchingSkills);

        response.setMatchingSkills(matchingSkills);

        response.setMissingSkills(
                SKILLS.stream()
                        .filter(skill -> !matchingSkills.contains(skill))
                        .toList());

        response.setMatchPercentage(
                (matchingSkills.size() * 100) / SKILLS.size());

        response.setSuggestions(response.getMissingSkills());

        return response;
    }
}