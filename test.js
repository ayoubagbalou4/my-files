
const mongoose = require('mongoose');
const testssModel = mongoose.model('testss66f88ce4eddb1aec7f9f74f0', {

    name: {
        type: String,
        required: [false, 'name is required'],
        minlength: [0, 'name must be at least 3 characters long'],
        maxlength: [50000, 'name cannot exceed 50000 characters']
    },
    age: {
        type: Number,
        required: [false, 'age is required'],
        min: [0, 'age must be at least 0'],
        max: [100000, 'age cannot exceed 100000']
    }
})
module.exports = testssModel
