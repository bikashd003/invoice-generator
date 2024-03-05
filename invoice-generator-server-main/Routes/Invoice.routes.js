import { Router } from "express";
import {  createInvoice, generatePdf, getInvoiceById,getAllInvoices  } from "../Controllers/Invoice.controller.js";
import isLoggedIn from "../Middleware/Auth.middleware.js"

const invoiceRouter=Router();

invoiceRouter.post("/create",isLoggedIn,createInvoice);
invoiceRouter.get("/invoice-pdf/:id",isLoggedIn,getInvoiceById);
invoiceRouter.post("/pdf",generatePdf)
invoiceRouter.get("/all-pdfs",isLoggedIn,getAllInvoices)
export default invoiceRouter;
