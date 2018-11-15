const Joi = require("joi");
const mongoose = require("mongoose");

const receipt_schema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  product: mongoose.Schema.Types.ObjectId,
  type: String,
  time: { type: Date, default: Date.now }
});

const Receipt = mongoose.model('Receipt', receipt_schema);

function validate_receipt(receipt) {
  const schema = {
    from: Joi.string(),
    to: Joi.string(),
    amount: Joi.number(),
    product: Joi.string(),
    type: Joi.string(),
    time: Joi.date().default(Date.now)
  };
  return Joi.validate(receipt, schema);
}

exports.Receipt = Receipt;
exports.validate = validate_receipt;
exports.receipt_schema = receipt_schema;