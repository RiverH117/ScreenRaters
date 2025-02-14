import express from "express";

// Import the connection object
import sequelize from "./config/connection.js";

// import dotenv from 'dotenv';
// dotenv.config()
import router from "./routes/index.js";



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);


// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
