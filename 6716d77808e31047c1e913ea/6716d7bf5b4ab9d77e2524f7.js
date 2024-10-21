
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user6716d7bf5b4ab9d77e2524f7', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            },
                            email: {
                                type: String,
                                required: [true, 'email is required'],
                                minlength: [0, 'email must be at least 3 characters long'],
                                maxlength: [50000, 'email cannot exceed 50000 characters']
                            },
                            age: {
                                type: Number,
                                required: [true, 'age is required'],
                                min: [18, 'age must be at least 18'],
                                max: [100, 'age cannot exceed 100']
                            }
            });
            module.exports = userModel;
        