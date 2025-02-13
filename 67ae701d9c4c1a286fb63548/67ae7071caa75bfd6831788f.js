
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user67ae7071caa75bfd6831788f', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [20, 'name must be at least 20 characters long'],
                                maxlength: [30, 'name cannot exceed 30 characters']
                            },
                            age: {
                                type: Number,
                                required: [true, 'age is required'],
                                min: [0, 'age must be at least 0'],
                                max: [100000, 'age cannot exceed 100000']
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                                minlength: [0, 'email must be at least 3 characters long'],
                                maxlength: [50000, 'email cannot exceed 50000 characters']
                            }
            });
            module.exports = userModel;
        