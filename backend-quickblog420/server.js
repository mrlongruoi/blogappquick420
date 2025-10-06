import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./configs/db.js";
import blogRouter from "./routes/blogRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

const app = express();
await connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("API đang làm việc"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  console.log("Server đang chạy trên cổng " + PORT);
});

export default app;
