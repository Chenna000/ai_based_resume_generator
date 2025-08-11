# 📝 AI Resume Builder

A professional AI-powered Resume Builder application that generates well-structured and visually consistent resumes based on user input.  
This project focuses mainly on the **backend** implementation while keeping the frontend minimal for testing purposes.

---

## 🚀 Features
- Generates **professional IT job resumes** in JSON format
- Reads prompt from `resume_prompt.txt` for consistent AI output
- Uses **OpenRouter API** with the `openchat/openchat-7b` model (Free Tier support)
- Handles structured resume data (Personal Info, Skills, Experience, Education, Projects, etc.)
- Backend built with **Spring Boot** for scalability and clean architecture
- Minimal **React.js frontend** for testing and previewing generated resumes

---

## 📊 System Architecture

```mermaid
flowchart TD
    A[User Input in Frontend] -->|Send Data via API| B[Spring Boot Backend]
    B --> C[Read AI Prompt from resume_prompt.txt]
    C --> D[Call OpenRouter API with Prompt + User Data]
    D --> E[AI Generates Resume in JSON Format]
    E --> B
    B -->|Send JSON Resume| F[Frontend Displays Resume]
🛠 Tech Stack
Backend (Main Focus)
Java 17

Spring Boot 3

OpenRouter API (AI model: openchat/openchat-7b)

Maven

REST API for communication

Frontend (Minimal for Testing)
React.js

Tailwind CSS

react-hook-form for form handling

react-hot-toast for notifications

📂 Project Structure
bash
Copy
Edit
ai-resume-builder/
│
├── backend/
│   ├── src/main/java/com/resume/backend/
│   │   ├── controller/        # API controllers
│   │   ├── service/           # Business logic
│   │   ├── config/            # OpenRouter API config
│   │   └── ResumeBuilderApp.java
│   ├── resources/
│       ├── application.properties
│       └── resume_prompt.txt  # AI prompt template
│
├── frontend/
│   ├── src/components/
│   │   ├── GenerateResume.jsx
│   │   └── Resume.jsx
│   ├── App.jsx
│   └── index.js
⚙️ Setup Instructions
1️⃣ Backend
bash
Copy
Edit
cd backend
# Add your OpenRouter API key in application.properties
# Example:
# openrouter.api.key=sk-xxxxxxxxxxxxxxxx
mvn spring-boot:run
2️⃣ Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
🔑 Environment Variables
In application.properties:

properties
Copy
Edit
openrouter.api.key=your_openrouter_api_key
📌 API Testing with Postman
Start backend server (mvn spring-boot:run)

Open Postman

Make a POST request:

URL: http://localhost:8080/api/generate-resume

Body: Raw JSON (Example):

json
Copy
Edit
{
  "userDescription": "I am a Java Full Stack Developer with internship experience at XYZ Corp..."
}
🎯 My Role & Focus
I primarily focused on backend development, ensuring:

Clean and maintainable Spring Boot architecture

API integration with OpenRouter

JSON schema consistency

AI prompt optimization

The frontend is kept simple to allow other developers or designers to enhance it further.

