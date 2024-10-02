
            const mongoose = require('mongoose');
            const usersModel = mongoose.model('users66fdc0c80d4b539623a070cb', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            },
                            age: {
                                type: Number,
                                required: [true, 'age is required'],
                                min: [0, 'age must be at least 0'],
                                max: [100000, 'age cannot exceed 100000']
                            },
                            email: {
                                type: String,
                                required: [true, 'email is required'],
                                minlength: [0, 'email must be at least 3 characters long'],
                                maxlength: [50000, 'email cannot exceed 50000 characters']
                            }
            });
            module.exports = usersModel;
        