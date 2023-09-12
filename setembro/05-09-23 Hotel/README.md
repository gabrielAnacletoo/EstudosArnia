# Hotel Reservation API

![Node.js](https://img.shields.io/badge/Node.js-14.0-green)
![Express.js](https://img.shields.io/badge/Express.js-4.17-blue)
![Mongoose](https://img.shields.io/badge/Mongoose-5.9-orange)

This is a Node.js API that allows hotel reservation management. The API follows the MVC (Model-View-Controller) pattern to ensure an organized and maintainable architecture.

## Technologies Used

- **Express**: Web framework for Node.js.
- **Dotenv**: Environment variable loading.
- **Mongoose**: Library for MongoDB object modeling.
- **Jsonwebtoken**: JWT authentication for security.
- **Bcrypt**: Password hashing.
- **Moment.js**: Date manipulation.
- **Yup**: Data validation.
- **Authentication Middleware**: To protect sensitive routes.

## Features

With this API, you can:

- Register Users and Hotels: Users can easily register, and hotels can be added.
- Secure Login: JWT authentication generates tokens valid for 1 hour.
- Simple Reservations: Search for popular destinations like Fortaleza, Salvador, Curitiba, and make reservations in available hotels.
- Room Availability Check: The API automatically checks room availability in real-time and confirms the reservation only if rooms are available in the chosen hotel.
- Reservation Cancellation: Users can easily cancel their reservations when necessary.

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/repo-name.git
   cd repo-name 


2. Install dependencies:
   npm install


3. Configure environment variables in the .env file: <br />
PORT=3000 <br />
MONGODB_URI=your-mongodb-uri <br />
JWT_SECRET=your-jwt-secret <br />


## Author <br />
Gabriel Anacleto
