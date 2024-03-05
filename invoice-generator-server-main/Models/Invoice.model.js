import mongoose, { Schema } from 'mongoose';
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  }
});

const invoiceSchema = new Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
  products: [productSchema],
  grandTotal: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
export { Invoice };