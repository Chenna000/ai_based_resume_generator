# 📝 AI Resume Builder

A modern **AI-powered Resume Builder** built with **React**, **Spring Boot**, and **OpenRouter AI models**.  
It generates clean, professional resumes instantly, with a print-friendly white background layout.

---

## 🚀 Features

- **AI-powered resume generation** using OpenRouter models
- **Professional, ATS-friendly** layout (white background, no boxed styles)
- **Live preview** while editing resume details
- Fully responsive design using **Tailwind CSS**
- Export-ready for **PDF** or printing
- Backend-focused implementation — **primary effort on Java Spring Boot API & AI integration**,  
  while frontend is minimal and functional

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
Spring Boot (Java)

REST API endpoints for AI request handling

OpenRouter API integration

Prompt-based AI resume generation

Frontend (Basic Functional Layer)
React.js

Tailwind CSS + DaisyUI

react-hook-form for form handling

react-hot-toast for notifications

AI
OpenRouter API with the free openchat/openchat-7b model

AI prompt stored in resume_prompt.txt

📂 Project Structure
bash
Copy
Edit
frontend/
│── src/
│   ├── components/
│   │   ├── GenerateResume.jsx     # AI prompt + API call
│   │   ├── Resume.jsx              # Resume preview component
│   │   ├── FormInputs.jsx          # Input fields for resume
│   ├── App.jsx
│   ├── index.jsx
│── public/
│── tailwind.config.js
backend/
│── src/main/java/com/example/resumebuilder/
│   ├── controller/
│   ├── service/
│   ├── ResumeBuilderApplication.java
resume_prompt.txt                   # AI resume generation prompt
⚙️ Installation & Setup
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder
2️⃣ Install frontend dependencies
bash
Copy
Edit
cd frontend
npm install
3️⃣ Configure environment variables
Create a .env file in frontend/:

env
Copy
Edit
VITE_API_URL=http://localhost:8080   # Backend API URL
OPENROUTER_API_KEY=your_openrouter_api_key
4️⃣ Start the frontend
bash
Copy
Edit
npm run dev
5️⃣ Start the backend
bash
Copy
Edit
cd backend
./mvnw spring-boot:run
🖥 Usage
Fill in your personal information, skills, and experience in the form.

Click Generate Resume to get an AI-generated professional resume.

Preview your resume in real-time.

Print or export as PDF.

🎨 Customization
Change AI prompt → Edit resume_prompt.txt

Modify resume styling → Update Resume.jsx

Change AI model → Update backend OpenRouter API call

📌 Future Improvements
Multiple resume templates
User authentication & saved resumes



👨‍💻 Author
Developed by [Your Name]
📧 Email:chenna6305092639@gmail.com
Note: My primary focus was on the backend development of this project — including the Spring Boot API, AI model integration, and data handling.
The frontend was implemented only to provide a minimal, functional interface for testing and using the backend features.
