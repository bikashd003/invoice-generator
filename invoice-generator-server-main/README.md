# Invoice Generator

This is a web application for generating invoices dynamically.This is repo is only contain the backend. For frontend see the readme It allows users to input product details and generates a downloadable PDF invoice.

## Setup

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running locally or a MongoDB instance hosted online

### Installation
1. Clone the repository:
   ```bash
   https://github.com/bikashd003/invoice-generator-server.git
2. Navigate to the project directory:
   ```bash
   cd invoice-generator-server
3. Install dependencies:
   ```bash
   npm install
3. Create a `.env` file in the root directory of the project and define the following environment:
   ```bash
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

### Running the Application
3. Run the application
   ```bash
   nodemon server.js

## Additional Libraries and Tools
### The following additional libraries and tools are used in this project:
- Bcrypt: for hashing passwords
- CORS: for enabling Cross-Origin Resource Sharing
- Dotenv: for loading environment variables from a .env file
- Express: for building the web server and RESTful APIs
- Jsonwebtoken: for generating and verifying JSON Web Tokens for user authentication
- Mongoose: for interacting with MongoDB databases
- Puppeteer: for generating PDF files from HTML content
## Server Project Link
The Frontend repo for this project can be found [here](https://github.com/bikashd003/invoice-generator-client).
