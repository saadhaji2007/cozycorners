# CozyCorners 🏡

Welcome to **CozyCorners**, a full-stack web application developed over three months using the MERN stack. This platform enables users to find, share, and review cozy listings with ease.

## 🏙️ Project Overview
CozyCorners is a community-driven application where users can:
- Browse cozy listings submitted by others  
- Securely register and log in  
- Create, edit, and delete their own listings  
- Share reviews and discover new cozy spots

It’s a testament to three months of learning and implementing best practices across frontend and backend development.

---

## ✨ Features
- **User Authentication**: Protected signup/login/logout flows  
- **Listing Management**: Full CRUD operations for listings  
- **Review System**: Write and view reviews on listings  
- **Server-Side Rendering**: Built using EJS templates  
- **Security & Validation**: Enforced on both frontend and backend  
- **Responsive UI**: Mobile-first design with HTML5 & CSS3  

---

## 🛠️ Tech Stack
| Layer        | Technology           | Role                            |
|--------------|----------------------|----------------------------------|
| Frontend     | React, HTML5, CSS3   | UI & user interaction           |
| Backend      | Node.js, Express.js  | API endpoints & server logic    |
| Database     | MongoDB              | Data storage for users, listings, reviews |
| Templating   | EJS                  | Server-side view rendering      |
| Dev Tools    | Git, dotenv, etc.    | Version control & env management|

---

---

## 🚀 Getting Started

### Clone & Install

```bash
git clone https://github.com/saadhaji2007/cozycorners.git
cd cozycorners
```

### Setup Environment

In the project root, create a `.env` file:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

### Run the App

Install the dependencies and start the server:

```bash
npm install
npm run dev
```

Then visit: [http://localhost:5000](http://localhost:5000)

---

## 📂 Directory Structure

```bash
cozycorners/
├── models/       # Mongoose models (User, Listing, Review)
├── routes/       # Express routes
├── views/        # EJS templates
├── public/       # Static files (CSS, client JS)
├── controllers/  # Route logic
├── middleware/   # Auth & validation middleware
└── server.js     # App entry point
```

---

## 🚧 Future Enhancements

- 🌐 Add image uploads (e.g., Cloudinary integration)  
- ⚙️ Expand role-based access (admin panel)  
- 💵 Implement payments or booking features  
- 🔍 Enhance UI/UX with React components  

---

## 🤝 Contribute & Feedback

Your feedback matters! To collaborate:

- Fork the repo  
- Create a branch (`feature/my-feature`)  
- Commit your changes  
- Open a pull request  

Or simply raise an issue—your suggestions help me learn and grow.

---

## 📬 Contact
  
📧 Email: hajisaad029@gmail.com  
🌐 LinkedIn: [https://www.linkedin.com/in/saadhaji2007/](https://www.linkedin.com/in/saadhaji2007/)

---

## 📝 License

📄 This project is licensed under the [MIT License](./LICENSE).
