const mongoose = require('mongoose')

const TabSchema = new mongoose.Schema({
  tab: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  tags: [String]
}, {
  timestamps: true
})

module.exports = mongoose.model('Tab', TabSchema)
