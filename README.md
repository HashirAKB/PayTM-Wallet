# PayTM Wallet - A Digital Wallet Application

Welcome to the **PayTM Wallet** project, a comprehensive digital wallet solution inspired by PayTM. This application allows users to manage their finances efficiently with features such as user authentication, account management, balance display, and more. The project includes both backend and frontend components, making it a full-stack application built with modern web technologies.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Evolution](#project-evolution)
5. [Setup and Installation](#setup-and-installation)
6. [Contribution Guidelines](#contribution-guidelines)
7. [Live Demo](#live-demo)
8. [PR Summaries](#pr-summaries)

## Overview

**PayTM Wallet** is a digital wallet application that provides users with a secure and efficient way to manage their finances. This application allows users to create an account, authenticate, view account balances, transfer funds, and manage their profiles.

The project consists of:
- A **backend** built with Express.js and MongoDB for handling server-side logic, API endpoints, and database operations.
- A **frontend** developed with React and Tailwind CSS, providing a responsive and intuitive user interface.

## Features

- **User Authentication**: Secure signup and login using JWT tokens.
- **Account Management**: View balances, transfer funds, and manage personal information.
- **Real-time Updates**: Reflects changes such as balance updates and profile edits immediately.
- **Responsive UI**: Built with Tailwind CSS for a mobile-first, responsive design.
- **Reusable Components**: Modular and reusable UI components for better code maintenance.

## Technology Stack

### Backend

- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MongoDB, managed via Mongoose ODM
- **Libraries**:
  - **Zod**: Input validation library
  - **Dotenv**: Environment variable management
- **Tools**:
  - **Docker**: Containerization of the backend application

### Frontend

- **Language**: JavaScript
- **Framework**: React
- **CSS Framework**: Tailwind CSS
- **Build Tool**: Vite
- **Libraries**:
  - **Axios**: For API requests
  - **Radix UI**: For enhanced UI components

## Project Evolution

### Initial Development

The project began with basic user management and account management features, allowing users to create accounts, sign in, and view account details. The backend was initially set up to handle user authentication and basic CRUD operations for account management.

### Feature Expansion

As the project progressed, additional features were added:
- **User Interface Enhancements**: Improved user experience with dynamic navigation, context-based user interactions, and responsive design.
- **Error Handling and Security**: Refined backend and frontend error handling, improved security measures for authentication, and introduced environment variable management.

### Final Touches

The final phase focused on:
- **Real-time Updates**: Integration of components like dynamic navigation bars based on user authentication status and real-time balance display.
- **Polishing and Deployment**: Final code refactoring, polishing of UI components, and preparation for deployment using Docker.

## Setup and Installation

To set up the application locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- Docker (for containerized deployment)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/HashirAKB/Paytm-Wallet.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd Paytm-Wallet/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the `backend/` directory based on the `.env.example` file provided.
5. Start the server:
   ```bash
   node index.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Paytm-Wallet/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Docker Setup

For a Dockerized deployment:
1. Build the Docker image:
   ```bash
   docker build -t paytm-wallet .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 paytm-wallet
   ```

## Contribution Guidelines

We welcome contributions from the community! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

Ensure your code adheres to the project's coding conventions and passes all linting checks. Detailed contribution guidelines are available in the `CONTRIBUTING.md` file.

## Live Demo

- [Frontend Live Version](https://paytm-l3vn.onrender.com) - Hosted on Render
- [Backend Live Version](https://paytm-wallet-backend-xmky.onrender.com) - Hosted on Render

## PR Summaries

Here are the highlights from the pull requests (PRs) that shaped this project:

### PR #15: Refactor index.html

- **Summary**: Simplified the structure and improved loading times by optimizing the HTML file.

### PR #14: Update README

- **Summary**: Added direct links to live backend and frontend applications in the README for improved accessibility.

### PR #13: Import Axios

- **Summary**: Integrated Axios library for improved API interactions and error handling.

### PR #12: Implemented Dynamic Navbar Based on Authentication Status

- **Summary**: Added an authentication context, route protection, and dynamic navigation elements to enhance security and user experience.

### PR #10: User Account Management

- **Summary**: Introduced new UI components for alerts, separators, skeletons, and a user profile management system.

### PR #9: Improved User Auth

- **Summary**: Enhanced authentication processes with refined error handling and state management.

### PR #8: Add Balance and User Display Components

- **Summary**: Added components for displaying account balance and user information, along with search functionality.

### PR #7: Backend - API to Fetch Current User

- **Summary**: Improved user management with optional updates and secured routes for retrieving current user details.

### PR #6: Implemented User Sign-in

- **Summary**: Developed sign-in functionality with improved state management and user feedback mechanisms.

### PR #5: Implemented User Account Creation Logic

- **Summary**: Enhanced the user interface and interactions for account creation and transaction functionalities.

### PR #3: User Authentication Frontend Components

- **Summary**: Added core authentication components and navigation, streamlining the user onboarding process.

### PR #2: Finished Backend

- **Summary**: Completed backend development with routes for account management and user authentication.

### PR #1: Wallet User Management

- **Summary**: Initial implementation of user management API with JWT authentication and structured routing.

## Contact

If you have any questions or suggestions, please feel free to reach out to us via the repository's [Issues](https://github.com/HashirAKB/Paytm-Wallet/issues) page.

HashirAKB - [twitter](https://x.com/HashirAKB)
Project Link: [https://github.com/HashirAKB/Medium](https://github.com/HashirAKB/Paytm-Wallet)
