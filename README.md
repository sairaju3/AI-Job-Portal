# 🤖 AI Job Portal

### AI-Powered Resume Screening and Job Recommendation System

The **AI Job Portal** is a full-stack web application developed to connect job seekers and recruiters through a centralized recruitment platform.

The system allows candidates to register, securely log in, upload resumes, search for jobs, match their skills with job requirements, receive AI-based job recommendations, apply for jobs, and track their applications.

Recruiters can create and manage job postings, view applicants, search candidates, download resumes, and update application statuses. Administrators can manage registered users.

---

## 🚀 Features

### 👨‍💼 Candidate / User

- User Registration
- Secure User Login
- JWT Authentication
- Resume Upload
- Resume Text Extraction
- Resume Analysis
- Skill Identification
- AI Job Matching
- Match Percentage Calculation
- AI Job Recommendations
- Job Search
- Job Application
- Application Tracking

### 🏢 Recruiter

- Recruiter Login
- Recruiter Dashboard
- Create Job Postings
- Manage Jobs
- Edit Jobs
- View Applicants
- Search Candidates
- Download Resumes
- Shortlist Candidates
- Reject Candidates
- Hire Candidates
- Update Application Status

### 👨‍💻 Administrator

- Admin Login
- Admin Dashboard
- View Users
- Manage Users
- Manage User Accounts
- Role-Based Access Control

---

## 🧠 AI Resume Processing

The application uses **Apache Tika** to extract text from uploaded resume files.

The extracted resume text is stored in the database and used for:

- Candidate information extraction
- Technical skill identification
- Matching skills
- Missing skills
- Job matching
- Job recommendations
- Match percentage calculation

The job matching system compares candidate resume skills with the required skills of a job and calculates a match percentage.

---

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js |
| Backend | Java, Spring Boot |
| Programming Language | Java |
| Security | Spring Security, JWT |
| Database | MySQL |
| Resume Processing | Apache Tika |
| Build Tool | Maven |
| API Communication | REST API |
| Frontend HTTP Client | Axios |
| Version Control | Git, GitHub |
| CI/CD | GitHub Actions |
| Frontend Deployment | Render |
| Backend Deployment | Render |
| Database Deployment | Railway |

---

## 🏗️ System Architecture

```text
User / Recruiter / Admin
          ↓
    React.js Frontend
          ↓
       REST APIs
          ↓
   Spring Boot Backend
          ↓
 ┌────────┼───────────┐
 ↓        ↓           ↓
JWT    Apache Tika   Business
Security Resume      Logic
         Processing
          ↓
     Railway MySQL

---

## 🔄 Application Flow

```text
User Login / Registration
          ↓
     JWT Authentication
          ↓
    Candidate Dashboard
          ↓
     Upload Resume
          ↓
   Apache Tika Extraction
          ↓
    Resume Text Storage
          ↓
   Skill Identification
          ↓
 ┌────────┴───────────┐
 ↓                    ↓
Job Matching      Job Recommendation
 ↓                    ↓
Match Percentage   Recommended Jobs
          ↓
      Apply for Job
          ↓
   Track Application

