// const express = require("express");
// const app = express();
// require('dotenv').config();
// const connectDB = require('./config/db')
// const router = require('./routes/index')
// const cors = require('cors');
// const cookieParser = require("cookie-parser");

// connectDB()

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }))

// app.use(express.json())
// app.use(cookieParser())

// app.use('/api', router)

// app.listen(8080, () => {
//     console.log("Server is Running on port 8080");
// });




const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index");

const app = express();

// Connect to the database
connectDB();

// Define allowed origins
const allowedOrigins = [
    "http://localhost:3000", // Local development front-end
    "https://e-commerce-web-2tmy.vercel.app" // Deployed front-end
];

// Set up CORS
app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (like mobile apps or curl)
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true, // Allow cookies and credentials
    })
);

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api", router);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
