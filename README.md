# Mini CRM System

This project is a simple CRM (Customer Relationship Management) system built with Next.js, Node.js, and MongoDB. It allows users to create and manage company information, including industry details, description, and more.

## Features

- Create a new company profile.
- View all companies and their details.
- Auto-incrementing `id` for each new company.
- MongoDB integration for database management.
- Simple REST API endpoints.

## Tech Stack

- **Front-end**: Next.js, React
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Tools**: VS Code, MongoDB Compass

## Prerequisites

- **Node.js**: [Download and install Node.js](https://nodejs.org/en/download/)
- **MongoDB**: You can use [MongoDB Compass](https://www.mongodb.com/products/compass) to manage your database.
- **VS Code**: [Download and install VS Code](https://code.visualstudio.com/)

## Run the development server:
npm run dev

The application will be accessible at http://localhost:3000.


## Database Setup
To set up your MongoDB database:

Open MongoDB Compass and create a new database named mini-crm.
Create a collection named companies.
The company model contains the following fields:
1.  name (string, unique, required)
2.  industry (string, required)
3.  description (string, default: empty string)
4.  createdAt (date, default: current date)


## API Endpoints
GET /api/companies: Get all companies.
POST /api/companies: Create a new company.
Request body should contain name and industry fields.

## Known Issues

Use of Deprecated MongoDB Options: If you see warnings related to useNewUrlParser or useUnifiedTopology, these options are deprecated and can be ignored.

## Usage
Navigate to http://localhost:3000 to view the home page.
Go to /create-company to create a new company.
Go to /view-companies to see all the companies.

## Note
Make sure all the files are placed in the exact location as mentioned in the first line of each file...


Thank you for reading...
