import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import registrationRoutes from "./src/routes/registration.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", registrationRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
