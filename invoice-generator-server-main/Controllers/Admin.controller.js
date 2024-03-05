import adminSchema from "../Models/Admin.model.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }
    try {
        const admin = await adminSchema.findOne({ email: email.trim() });
        if (admin) {
            return res.status(400).json({ error: "Email already exist" });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new adminSchema({ name, email: email.trim(), password: encryptedPassword });
        await newAdmin.save();
        res.status(201).json({ message: "Admin created successfully" })
    } catch (error) {
        console.log("error to save user data", error)
    }

}
const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }
    try {
        const admin = await adminSchema.findOne({ email: email.trim() });
        if (!admin) {
            return res.status(400).json({ message: "Admin not found" })
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const token = jwt.sign(admin.toJSON(), process.env.JWT_SECRET, { expiresIn: "10d" });
        res.status(200).json({ message: "Login successful", token: token })
    } catch (err) {
        console.log("error to save user data", err)
    }

}

export {
    registerAdmin,
    loginAdmin
};
