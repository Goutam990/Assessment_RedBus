# RedBus Clone - Full Stack (Frontend + Supabase)
## Live :- https://redbus-fullstack.netlify.app/

This is a full-stack clone of the RedBus website built using **HTML, CSS, and JavaScript** for the frontend and backend SB services such as Authentication and Database.

The goal of this project was to recreate the look and feel of RedBus while integrating real backend features like **User Registration/Login** and **Contact Form Data Storage**.


## ✅ Features Implemented

- ✅ Responsive Home Page (HTML + CSS)
- ✅ User Signup / Login 
- ✅ Contact Form that saves data.
- ✅ Secure credentials using `config.js` (ignored in GitHub)

---

## 🧑‍💻 Tech Stack

| Layer         | Technology Used                |
|---------------|--------------------------------|
| Frontend      | HTML, CSS, JavaScript          |
| Backend (BaaS)| Supabase (Auth + Database)     |

## 📁 Project Structure
/RedBusClone/
│
├── index.html
├── contact.html
├── login.html
├── config.js <- contains Supabase URL & KEY (ignored in Git)
├── app.js <- common JS logic / fetch data
├── README.md
└── .gitignore

## Setup Done so far

Table: contact with fields id, name, email, message, created_at

Auth Enabled (email+password)

##  Future Improvements

Add "Search Bus / Tickets" feature

Save bookings to database

Add session-based protected routes

## Live :- https://redbus-fullstack.netlify.app/

