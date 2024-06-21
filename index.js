import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";
import { config } from "dotenv";
// index.js
import { Connectdb } from "./config/db.js";
console.log('Imported Connectdb:', { Connectdb });


const app = express();
const PORT = config.port || 5000; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
(async () => {
    await Connectdb();

        console.log('Successfully connected to MongoDB Atlas');

})();

// Routes
app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) => res.status(404).send("You've tried reaching a route that doesn't exist."));

// Start the server
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
