
            const mongoose = require('mongoose');
            const studentModel = mongoose.model('student670bfcb7f69871c787f24e4c', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [5, 'name must be at least 5 characters long'],
                                maxlength: [20, 'name cannot exceed 20 characters']
                            },
                            age: {
                                type: Number,
                                required: [true, 'age is required'],
                                min: [18, 'age must be at least 18'],
                                max: [25, 'age cannot exceed 25']
                            },
                            email: {
                                type: String,
                                required: [true, 'email is required'],
                                minlength: [0, 'email must be at least 3 characters long'],
                                maxlength: [50000, 'email cannot exceed 50000 characters']
                            }
            });
            module.exports = studentModel;
        