const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
      trim: true,
    }
  });

const Lead = mongoose.model('Lead', LeadSchema);

module.exports = {Lead};
