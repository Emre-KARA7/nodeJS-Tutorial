const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const CatagorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
});

CatagorySchema.pre('validate', function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Catagory = mongoose.model('Catagory', CatagorySchema);
module.exports = Catagory;
