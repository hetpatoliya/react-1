# Frontend Authentication Application

This frontend application is built using React with Vite and TypeScript. Bootstrap is used for styling. The app communicates with the NestJS backend and implements user signup, login, profile view, and logout functionality using JWT authentication.

## Technology Stack

React
Vite
TypeScript
Bootstrap
Axios
React Router DOM
react-hot-toast

## Project Structure Overview
src/pages contains Login, Signup, and Profile pages
src/services contains API configuration using Axios
App.tsx handles routing
main.tsx bootstraps the application

## Installing Dependencies
Run npm install to install all frontend dependencies.

## Running the Frontend
Run npm run dev
The frontend application will run on http://localhost:5173

## Backend Connection
The frontend communicates with the backend running on http://localhost:3000

## JWT tokens are stored in localStorage and automatically attached to requests using Axios interceptors.

## Application Features
User signup and login
JWT-based authentication
Protected profile page
Logout functionality
Toast notifications for success and error messages
Responsive UI using Bootstrap components

## Authentication Flow
User signs up or logs in
Backend returns a JWT token
Token is stored in localStorage
Axios attaches token to Authorization header
Protected profile endpoint is accessed
Logout clears token and redirects to login page

## Validation
Client-side validation prevents empty form submissions
Password length is validated on signup
Backend validation errors are displayed using toast notifications