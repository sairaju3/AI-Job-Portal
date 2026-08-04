package com.aijobportal.backend.dto;

import java.util.List;
import lombok.Data;

@Data
public class ResumeAnalysisResponse {

    private String name;
    private String email;
    private String phone;

    private int matchPercentage;

    private List<String> skills;

    private List<String> matchingSkills;

    private List<String> missingSkills;

    private List<String> suggestions;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getMatchPercentage() {
		return matchPercentage;
	}

	public void setMatchPercentage(int matchPercentage) {
		this.matchPercentage = matchPercentage;
	}

	public List<String> getSkills() {
		return skills;
	}

	public void setSkills(List<String> skills) {
		this.skills = skills;
	}

	public List<String> getMatchingSkills() {
		return matchingSkills;
	}

	public void setMatchingSkills(List<String> matchingSkills) {
		this.matchingSkills = matchingSkills;
	}

	public List<String> getMissingSkills() {
		return missingSkills;
	}

	public void setMissingSkills(List<String> missingSkills) {
		this.missingSkills = missingSkills;
	}

	public List<String> getSuggestions() {
		return suggestions;
	}

	public void setSuggestions(List<String> suggestions) {
		this.suggestions = suggestions;
	}
    
    
}