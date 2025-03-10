import dotenv from "dotenv";
import { connectDB } from "./db/index.js"
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

try {
  connectDB()
    .then(
      app.listen(process.env.PORT || 9000, () => {
        console.log(`⚙️  Server is running at port: ${process.env.PORT}`);
      })
    )
    .catch((err) => {
      console.log("❌ MySQL connection failed:", err);
    });
} catch (error) {
  console.log(error);
}


