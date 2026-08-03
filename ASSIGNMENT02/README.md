# Video Game Collection Tracker

## Live Application

https://video-game-tracker-btun.onrender.com

## GitHub Repository

https://github.com/roban6/COMP2068JSFrameworks.git

## Description

Video Game Collection Tracker is a CRUD web application built using Node.js, Express.js, MongoDB, Mongoose, and Handlebars.

The application allows users to register, authenticate, browse video games, search the collection, and manage game records through a protected dashboard.

The application includes local authentication, GitHub OAuth, Google OAuth, fuzzy keyword searching, and cloud deployment using Render.

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Handlebars (HBS)
- Bootstrap
- Passport.js
- Express Session
- Connect Mongo
- Render

---

# Features

## Authentication

The application supports:
- Local email/password registration and login
- GitHub OAuth authentication
- Google OAuth authentication
- Secure session management

## Public Game Collection

Users can browse games publicly:

/games

Features:
- View game collection
- Search games
- Read-only access

## Game Management Dashboard

Authenticated users can access:

/dashboard/games

Features:
- Add new games
- Edit games
- Delete games

## Fuzzy Keyword Search

The application uses:

mongoose-fuzzy-searching

to provide improved searching by title, platform, and genre.

---

# Installation

## Clone Repository

git clone https://github.com/roban6/COMP2068JSFrameworks.git

## Install Dependencies

npm install --legacy-peer-deps

## Run Application

npm run dev

npm start

---

# Deployment

The application is deployed using Render.

Build command:

npm install --legacy-peer-deps

Start command:

npm start

---

# Version Control

Major development commits:

- Create Express application structure
- Configure MongoDB connection
- Implement game CRUD functionality
- Add local authentication
- Add GitHub and Google OAuth
- Implement fuzzy searching
- Create public and private game pages
- Improve UI styling
- Deploy application to Render
- Add project documentation

---

# Author

Roban

COMP2068 JavaScript Frameworks

Assignment 2
