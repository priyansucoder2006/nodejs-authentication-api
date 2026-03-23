# Node.js Backend API

A production-ready backend API built using **Node.js, Express.js, MongoDB, Redis, JWT Authentication, and Rate Limiting**. This project demonstrates backend development concepts including authentication, authorization, data modeling, API security, and scalable architecture.

---

## 🚀 Features

* User Registration & Login
* Password Hashing using bcrypt
* JWT Authentication
* Authorization (Protected Routes)
* Rate Limiting using Redis
* MongoDB Data Modeling
* RESTful CRUD APIs
* Error Handling Middleware
* Environment Configuration
* MVC Project Structure
* API Security Best Practices

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Redis
* JWT (JSON Web Token)
* bcrypt
* dotenv

---

## 📁 Project Structure

```
src/
  controllers/
  models/
  routes/
  middlewares/
  services/
  utils/
  config/
app.js
server.js
package.json
README.md
.env
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Navigate to project folder

```
cd your-repo-name
```

### 3. Install dependencies

```
npm install
```

### 4. Create .env file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### 5. Run the server

```
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

## 🔐 Authentication APIs

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register user    |
| POST   | /api/auth/login    | Login user       |
| GET    | /api/auth/profile  | Get user profile |
| POST   | /api/auth/logout   | Logout user      |

---

## 📦 API Endpoints Example

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/products     | Get all products |
| POST   | /api/products     | Create product   |
| PUT    | /api/products/:id | Update product   |
| DELETE | /api/products/:id | Delete product   |

---

## 🧠 Concepts Implemented

* MVC Architecture
* REST API Design
* Authentication & Authorization
* Rate Limiting
* Database Indexing
* Middleware Handling
* Error Handling
* Secure Password Storage
* Token-based Authentication
* Redis Caching

---

## 📌 Future Improvements

* Refresh Tokens
* Email Verification
* Password Reset
* Docker Setup
* Deployment (AWS / Render)
* API Documentation (Swagger)


---

## 📜 License

This project is licensed under the MIT License.
