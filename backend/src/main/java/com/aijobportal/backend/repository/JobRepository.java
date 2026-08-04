package com.aijobportal.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aijobportal.backend.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByTitleContainingIgnoreCase(String title);

    List<Job> findByLocationContainingIgnoreCase(String location);

    List<Job> findBySkillsContainingIgnoreCase(String skills);
    
    List<Job> findByRecruiterEmail(String recruiterEmail);
}