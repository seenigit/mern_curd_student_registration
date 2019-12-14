const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    dob: Date,
    contact_number: String,
    class_name: String,
    teacher_name : String,
    address : String,
    city: String,
    state: String,
    country: String
})

mongoose.model('students', productSchema);