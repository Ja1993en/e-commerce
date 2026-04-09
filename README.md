# 🛒 e-commerce

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)
![Sequelize](https://img.shields.io/badge/Sequelize-ORM-purple)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📚 Table of Contents
- Description
- Technology
- Features
- Usage
- Installation
- Link to Github Page
- Video Demo
- References
- Author
- License

---

## 📌 Description
The E-Commerce Backend is a full-stack backend application designed to manage products, categories, and tags for an online retail platform. This project was built using Node.js, Express, MySQL, and Sequelize ORM.

The application provides RESTful API routes that allow users to perform CRUD operations on database data. It demonstrates how a real-world e-commerce backend handles data relationships, server-side logic, and database management.

This project highlights backend development skills, API design, and working with relational databases.

---

## 🛠️ Technology
- JavaScript  
- Node.js  
- Express.js  
- MySQL  
- Sequelize ORM  
- dotenv  

---

## 🚀 Features
- RESTful API routes for products, categories, and tags  
- Full CRUD functionality (Create, Read, Update, Delete)  
- Relational database structure using Sequelize  
- Environment variable configuration  
- Organized MVC-style structure  

---

## 💻 Usage
Run the application in the terminal:
```bash```
npm start
- Use tools like Insomnia or Postman to
test API routes
- Create, update, delete, and retrieve 
products, categories, and tags
- Manage relational data between tables

---

## 📂 Installation
Clone the repository:
`git` clone https://github.com/Ja1993en/e-commerce.git

Navigate into the project directory:
`cd` e-commerce

Install dependencies:
`npm` install

Create a .env file:
DB_NAME=ecommerce_db
DB_USER=root
DB_PASSWORD=yourpassword

Initialize the database:
mysql `-u` root `-p`
SOURCE db/schema.sql;

(Optional) Seed the database:
`npm` run seed

Start the server:
`npm start`

---

## 🔗 Link to Github Page
(https://github.com/Ja1993en/e-commerce)

---

## 🎥 Video Demo
👉 (Insomnia walkthrough recommended)

---

## 📚 References
- Stack Overflow
- W3Schools
- Sequelize Documentation
- SMU Bootcamp Course Material

---

## 👤 Author
Jalen McNeal
©2026 All Rights Reserved

---

## 📜 License
This project is licensed under the MIT License.