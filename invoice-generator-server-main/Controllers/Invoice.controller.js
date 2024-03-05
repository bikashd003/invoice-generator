import { Invoice } from "../Models/Invoice.model.js"
import puppeteer from 'puppeteer';

const createInvoice = async (req, res) => {
  try {
    const { products, grandTotal } = req.body;
    if (!products || !grandTotal) {
      return res.status(400).json({ message: "Please provide all the required fields" })
    }
    const invoice = new Invoice({
      admin: req.admin._id,
      products,
      grandTotal
    });
    await invoice.save();
    res.status(201).json({ message: "Invoice generated", invoiceId: invoice._id });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const getAllInvoices = async (req, res) => {
  try {
    const adminID  = req.admin._id;
    if (!adminID) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const invoices = await Invoice.find({ admin: adminID});
    res.json(invoices);
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const generatePdf = async (req, res) => {
  try {
    const { url,headers } = req.body; 
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders(headers);
    await page.goto(url, { waitUntil: 'networkidle0' });
  
    const pdfBuffer = await page.pdf({format: 'A4', printBackground: true });
  
    await browser.close();
    res.contentType('application/pdf').send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

  

export { createInvoice, getAllInvoices, getInvoiceById, generatePdf };