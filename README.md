# EventGo
EventGO is a full-stack project built with Spring Boot (Backend) and React.js (Frontend) where users can explore and book events and make secure payments using Stripe Payment Integration. The application supports Session-based Login Authentication and role-based access management for Admin and User.

 Features
  User Features

Session-based login & signup (No JWT required)

Browse events categorized as:

Upcoming Events
Ongoing Events
Past Events

Book an event and pay using Stripe Payment Gateway

Sort events by:

Event Date
Event Price

  Admin Features

Role-based access control
Add, Update, Delete events
Manage event details like:
Title, Description, Location, Venue
Image URL, Price, Date, Organizer Name

  Tech Stack
Frontend:

React.js

Components:

Home
Events
About
Contact
Login
Signup

Backend:

Spring Boot
Spring Security (Session authentication)
MySQL Database
RESTful APIs
Payments:
Stripe Integration

 Project Structure
Frontend (React)
/src
  /components
      Home.js
      Events.js
      Login.js
      Signup.js
      About.js
      Contact.js
  /pages
  /services
  /utils

Backend (Spring Boot)
/com.eventgo
  /controller
  /service
  /repository
  /dto
  /entity
  /config (security)

⚙️ Features Highlight

Session login authentication system

Real-world Admin + User flow
Stripe payment checkout
Event filtering & sorting
Database storage for events (with images URL)
Clean UI + responsive frontend design

  Learning Outcomes

This project demonstrates:

REST API development using Spring Boot
React component architecture and routing
Secure session authentication
Payment gateway integration
Full-stack deployment approach

🔧 Installation & Setup
Backend Setup
cd backend
mvn clean install
run the Spring Boot app

Frontend Setup
cd frontend
npm install
npm start


Make sure to configure database, Stripe keys, and API URLs.

 Future Enhancements (Optional)

Pagination for events
Search filters
User event history
Email notifications



 Author 
Made  by Aditya Raj Tiwari
