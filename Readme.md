# Simple Node.js Server

## Description

A basic and responsive Node.js server application built using **Express.js**. This project demonstrates CRUD operations on user data, serves static HTML and CSS files, and handles various HTTP requests. It’s designed to provide a clean and professional API with basic error handling, routing, and static content serving.

## Features

- **Home Page**: Serves a static homepage (`index.html`) with basic information.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations for user data through API routes.
- **API Endpoints**: 
  - `GET /users`: Retrieve a list of users.
  - `POST /users`: Add a new user.
  - `PUT /users/:id`: Update a specific user.
  - `DELETE /users/:id`: Delete a specific user.
- **Responsive Design**: Static files (HTML, CSS) are served for basic front-end interaction, ensuring the pages display well across devices.
- **Error Handling**: Basic error handling is implemented for invalid routes and methods.
- **Express Router**: Organized routes using Express Router for clean code structure.
- **Static Files**: Serves static files like HTML and CSS from the `public/` directory.

## Live Demo

Check out the live demo of the API and front-end served with Node.js:
- **GitHub Pages / Deployment Link**: [Deployment URL here]

## Requirements

To run this project locally, ensure you have the following installed:

- **Node.js**: Version 14.x or later
- **npm**: Version 6.x or later

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Saqibi4213/basic-nodejs-server.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd basic-nodejs-server
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Run the development server**:

    ```bash
    node server.js
    ```

5. **Open your browser** and go to `http://localhost:3000` to view the application.

## API Endpoints

- `GET /users`: Retrieves a list of all registered users.
- `POST /users`: Allows creating a new user by sending a JSON object in the request body.
- `PUT /users/:id`: Updates an existing user by specifying the user ID in the URL and sending the updated data.
- `DELETE /users/:id`: Deletes a user by specifying the user ID in the URL.

## Usage

- **Start the development server**: `npm run dev`
- **Build for production**: Not applicable for a basic server project, but you can set up scripts for production.
- **Run the server in production**: `npm start`
- **Run linting**: `npm run lint` (if ESLint is configured)


## Author

- **Name**: Mehria Saqibi
- **Email**: [your-email@example.com](mosawermh@gmail.com)
- **GitHub**: [Saqibi4213]


Feel free to modify this `README.md` file to better fit your project's needs or specific details.
