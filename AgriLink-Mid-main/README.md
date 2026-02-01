AgriLink-Mid
A full-stack e-commerce platform for agricultural products, built with React for the client and Node.js/Express for the server.

🚀 Getting Started
To get a copy of this project up and running on your local machine for development and testing purposes, follow these steps.

Prerequisites
You will need the following software installed on your machine:

Node.js and npm

A MongoDB database (local or cloud-based)

A Cloudinary account for image storage

Installation
Clone the repository:

  git clone https://github.com/Beejes/AgriLink-Mid.git
  cd AgriLink-Mid


Install client dependencies:

  cd client
  npm install


Install server dependencies:

  cd ../server
  npm install


⚙️ Configuration
Both the client and server sides require a .env file for configuration.

Client-Side .env
Create a file named .env in the client directory with the following content:

VITE_CURRENCY="Rs "
VITE_BACKEND_URL="http://localhost:4000"


Server-Side .env
Create a file named .env in the server directory with the following content. Replace the placeholder values with your own secret keys and credentials.

JWT_SECRET="<YOUR_JWT_SECRET>"
NODE_ENV="development"

# Admin Credentials
SELLER_EMAIL="<FARMER_GMAIL_ADMIN_PURPOSE>"
SELLER_PASSWORD="<PASSWORD>"

# MongoDB Setup
MONGODB_URI="<MONGODB_URL>"

# Cloudinary
CLOUDINARY_CLOUD_NAME="<YOUR_UNIQUE_NAME_PROVIDED_BY_CLOUDINARY>"
CLOUDINARY_API_KEY="<YOUR_API_KEY>"
CLOUDINARY_API_SECRET="<YOUR_API_SECRET>"


▶️ Running the Project
To start the client and server, open two separate terminal windows in the root directory of your project.

Start the Client
In the first terminal, navigate to the client directory and run:

cd client
npm run dev


Start the Server
In the second terminal, navigate to the server directory and run:

cd server
npm run server


Accessing the Seller/Farmer Section
To access the seller login page, simply add /seller to the client-side URL.

http://localhost:5173/seller

The client will be running on http://localhost:5173 and the server on http://localhost:4000.
