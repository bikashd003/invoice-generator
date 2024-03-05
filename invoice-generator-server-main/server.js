import express from "express";
import connectDB from "./Database/Db.js"
import cors from "cors"
import dotenv from "dotenv"
import adminRouter from "./Routes/Admin.routes.js";
dotenv.config({ path: "./.env" });
import errorHandler from "./Middleware/ErrorHandler.middleware.js"
import invoiceRouter from "./Routes/Invoice.routes.js"

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.status(200).json({
        serverTime: new Date().toLocaleString(),
        serverName: 'invoice-generator-app',
    })
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection error", err)
})
app.use("/admin",adminRouter)
app.use("/invoice",invoiceRouter)
app.use(errorHandler)