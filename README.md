#  Feedback OTP Verification System
A full-stack feedback system where users submit feedback, receive an OTP via email, and verify

## 🌐 Live Demo

> 🔗 [Live Link Coming Soon](#)

## 🚀 Features

- ✅ Feedback form with Name, Email, and Message
- ✅ OTP (One-Time Password) generation
- ✅ OTP sent via email using Nodemailer
- ✅ OTP expires after 2 minutes
- ✅ User is marked as verified after correct OTP
- ✅ Frontend built with React

---

## 🛠️ Tech Stack

**Frontend:**
- React
- TailwindCSS or CSS
- Fetch API

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemailer

---

## 📦 Getting Started

### 🔧 Prerequisites

- Node.js v14+
- MongoDB Atlas/local
- A test email account (e.g., Gmail) for OTP sending

### ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/Mayank-dev-app/myCollege

2. Install backend dependencies
cd backend
npm install

3. Create .env file in /backend:
PORT=4004
MONGO_URL=your_mongodb_uri
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password_or_app_password

4.Start the backend server
npm start

5. Run the frontend (HTMl/CSS/JS):

### API Endpoints
Method	Endpoint	Description
POST	/api/v1/message	Submit feedback and send OTP
POST	/api/v1/verify	Verify OTP for the feedback

📁 Project Structure
/full stack       → Express server
 └── /public      →(HTML/CSS/JS) 
  └── /routes     → API routes
  └── /Email      → Email utility (Nodemailer)
  └── /database   → MongoDB models

📝 License
This project is licensed under the MIT License.

Author
Mayank Sharma
