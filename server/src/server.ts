import express from "express";

// Import the connection object
import sequelize from "./config/connection.js";
import authRoutes from "./routes/authRoutes.js";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
