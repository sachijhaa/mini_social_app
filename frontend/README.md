# 🧑‍💻 Mini Social Post Application (3W Internship Assignment)

A full-stack social media-style web application where users can create accounts, share posts (text/images), interact via likes and comments, and view a global feed of posts.

This project is built as part of the **3W Full Stack Internship Assignment**.

---

## 🚀 Features

### 👤 Authentication
- User Signup (email + password)
- User Login system
- User data stored securely in MongoDB

### 📝 Posts
- Create posts with:
  - Text only
  - Image only
  - Text + Image
- Posts are optional in both fields (one is enough)

### 🌍 Social Feed
- Public feed visible to all users
- Displays:
  - Username
  - Post content
  - Like count
  - Comment count

### ❤️ Interactions
- Like any post
- Comment on any post
- Stores usernames of users who liked/commented
- Real-time UI updates after interaction

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS / Material UI / React Bootstrap (no TailwindCSS)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

---

## 📁 Project Structure
project-root/
│
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/ # Node + Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── server.js
│ └── config/
│
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name