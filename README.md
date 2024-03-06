# Invoice Generator

This is a web application that allows users to generate and download invoices in PDF format. It consists of a frontend client built with React and a backend server built with Node.js and Express.
## The download pdf features is not work after deployment
## Features

- User authentication: Users can sign up, log in, and log out securely.
- Invoice generation: Users can create invoices by adding products with quantities and rates.
- PDF generation: Invoices can be downloaded as PDF files for easy sharing and printing.
- Validity period: Each invoice is valid for 30 days from the creation date.
- 
## Live Demo
You can access the live demo of the application [here](https://invoice-generator-web-app.netlify.app/).

## Technologies Used

### Frontend
- React: A JavaScript library for building user interfaces.
- React Router: A library for routing in React applications.
- Axios: A promise-based HTTP client for making API requests.
- Moment.js: A library for parsing, validating, manipulating, and formatting dates.
- Numeral.js: A library for formatting and manipulating numbers.
- React Icons: A library of icons for React applications.
- React Spinners: A collection of loading spinners for React applications.
- React Toastify: A notification library for React applications.

### Backend
- Node.js: A JavaScript runtime for building server-side applications.
- Express: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing invoice data.
- Mongoose: A MongoDB object modeling tool for Node.js.
- Bcrypt: A library for hashing passwords securely.
- CORS: A middleware for enabling Cross-Origin Resource Sharing.
- Dotenv: A module for loading environment variables from a `.env` file.
- Jsonwebtoken: A library for generating and verifying JSON Web Tokens for user authentication.
- Puppeteer: A Node library for controlling headless Chrome and generating PDF files.

## Setup
1. Clone the repo
   ```bash
    git clone https://github.com/bikashd003/invoice-generator.git

### Client
1. Navigate to the client directory:
   ```bash
   cd invoice-generator-client
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
   
### Server
1. Navigate to the server directory:
   ```bash
   cd invoice-generator-server
2. Install dependencies:
   ```bash
   npm install
3. Create a `.env` file in the root directory of the server code and define the following environment:
   ```bash
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   
4. Start the server:
  ```bash
    nodemon server.js


