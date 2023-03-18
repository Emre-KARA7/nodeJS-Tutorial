const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    unique: true,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
