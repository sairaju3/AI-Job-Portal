package com.aijobportal.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aijobportal.backend.entity.Resume;
import java.util.Optional;

public interface ResumeRepository extends JpaRepository<Resume, Long> {

	Optional<Resume> findByUserId(Long userId);
}