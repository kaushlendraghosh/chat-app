import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/frontend/dist")));
server.listen(PORT, async() => {
	await connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});