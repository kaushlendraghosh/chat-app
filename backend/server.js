import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";



app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/frontend/dist")));
server.listen(PORT, async() => {
	await connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});