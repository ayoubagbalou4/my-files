
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user680e53e60efa875906b8af7a', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                                min: [18, 'age must be at least 18'],
                                max: [65, 'age cannot exceed 65']
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                                minlength: [null, 'email must be at least null characters'],
                                maxlength: [null, 'email cannot exceed null characters']
                            },
                            gender: {
                                type: String, 
                                required: [false, 'gender is required'],
                                enum: ["male", "female"]
                            },
                            birthday: {
                                type: Date,
                                required: [false, 'birthday is required']
                            }
            });
            module.exports = userModel;
        