import express from "express";
import cors from "cors";
import todoRoutes from "./routes/api/todoRoutes";
import opeaiRoutes from "./routes/opeaiRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Api is running the world World");
});
app.use("/todos", todoRoutes);
app.use("/opeai", opeaiRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3009");
});

