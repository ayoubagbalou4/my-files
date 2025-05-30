
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user680e4d60759bab3ff7d7209f', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                                minlength: [null, 'email must be at least null characters'],
                                maxlength: [null, 'email cannot exceed null characters']
                            },
                            datebirth: {
                                type: Date,
                                required: [false, 'datebirth is required']
                            },
                            gender: {
                                type: String, 
                                required: [false, 'gender is required'],
                                enum: ["male", "female"]
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                                min: [18, 'age must be at least 18'],
                                max: [65, 'age cannot exceed 65']
                            },
                            salary: {
                                type: Number,
                                required: [true, 'salary is required'],
                                min: [2500, 'salary must be at least 2500'],
                                max: [5000, 'salary cannot exceed 5000']
                            }
            });
            module.exports = userModel;
        