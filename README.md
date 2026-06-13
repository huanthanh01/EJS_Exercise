# Karaoke Room Management System

This is a Node.js/Express web application for managing karaoke room bookings. It uses MongoDB for data storage and EJS for rendering views.

## Requirements

- Node.js installed
- MongoDB installed and running on `localhost:27017`

## Installation

1. Open your terminal in the project directory.
2. Run `npm install` to install all dependencies.

## Configuration

Make sure you have a `.env` file in the root of the project with the following content:
```
PORT=3000
MONGO_URL=mongodb://localhost:27017/karaoke
```

## Running the Application

Start the server using one of the following commands:
```bash
npm run dev
```
or
```bash
node server.js
```

Once the server is running, you will see:
```
Server running at http://localhost:3000
MongoDB Connected
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Features

- View all room bookings
- Book a room (automatically calculates the total amount based on the room's hourly rate)
- Update booking information
- Delete a booking
