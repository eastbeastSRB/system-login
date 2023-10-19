# Login System

The "Login System" is a full-stack web application that provides user registration, login, logout, and user profile functionality. The application is built using React for the frontend and Node.js with Express.js for the backend.

## Table of Contents

- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Frontend](#frontend)
- [Backend](#backend)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [License](#license)

## Project Overview

The "Login System" project is designed to offer a user-friendly and secure authentication system, including features such as:

- User Registration: Users can create new accounts by providing their details.
- User Login: Registered users can log in using their credentials.
- User Profile: Users have access to their profile, where they can view and edit their information.
- Logout: Users can securely log out of their accounts.

## Folder Structure

The project has the following folder structure:

### Server

- `/server`
  - `/src`: Main server source code folder.
    - `/controllers`: Contains controllers handling request handling logic.
    - `/middlewares`: Middleware functions for request processing.
    - `/routes`: API routes definition.
    - `/models`: Data models for MongoDB using Mongoose.
    - `/utils`: Utility functions and modules.
  - `/node_modules`: Server-specific dependencies.
  - `package.json`: Server package configuration.
  - `.gitignore`: Git ignore configuration.

### Client

- `/client`
  - `/src`: Main client source code folder.
  - `/node_modules`: Client-specific dependencies.
  - `package.json`: Client package configuration.
  - `vite.config.js`: Vite build tool configuration.
  - `tailwind.config.js`: Tailwind CSS configuration.
  - `.eslintrc.js`: ESLint configuration.

### Root

- `/node_modules`: Shared dependencies used by both the server and client.
- `package.json`: Root-level package configuration.
- `package-lock.json`: Lock file for dependencies.
- `.gitignore`: Git ignore configuration.
- `concurrently`: Used to run both the server and client together.

## Frontend

### Frontend Technologies

- **React**: Used as the front-end library.
- **Vite**: Used as the build tool for efficient development.
- **Tailwind CSS**: Used for styling and design.
- **React Router**: Provides routing for the application.
- **React Hook Form**: Used for form validation.
- **Redux**: Used for state management.
- **Axios**: Used for making HTTP requests.
- **ESLint and Prettier**: Ensuring code quality and style consistency.

## Backend

### Backend Technologies

- **Node.js**: Used as the back-end runtime environment.
- **Express.js**: Used to build the RESTful API.
- **MongoDB and Mongoose**: Used for data storage and modeling.
- **Zod**: Used for backend data validation.
- **Bcrypt.js**: Used for password hashing and comparison.
- **JSON Web Token (JWT)**: Used for authentication and setting cookies.
- **Dotenv**: Used for environment variable configuration.

## Prerequisites

Before running the "Login System" application, ensure you have the following software and services installed:

- Node.js (version 18+)
- NPM (Node Package Manager)
- MongoDB database

The remaining dependencies will be automatically installed using NPM.

## Getting Started

To run the application, follow these steps:

1. Clone the repository: $ git clone https://github.com/eastbeastSRB/system-login

2. Configure environment variables and settings as needed inside .env file.

3. Install dependencies for both the client and server
   **cd client**
   **npm install**

   **cd ../server**
   **npm install**

**but also install dependencies in root folder because of concurrently package and possibility to run application (FE + BE) with one script**

navigate to root folder and run next command
**npm run start**

4. Access the application in your web browser.

License
This project is licensed under the ISC License.
