
            const mongoose = require('mongoose');
            const studentModel = mongoose.model('student66fd22b3be6fdf5375d4c5a4', {
                
                            username: {
                                type: String,
                                required: [true, 'username is required'],
                                minlength: [0, 'username must be at least 3 characters long'],
                                maxlength: [50000, 'username cannot exceed 50000 characters']
                            },
                            email: {
                                type: String,
                                required: [true, 'email is required'],
                                minlength: [0, 'email must be at least 3 characters long'],
                                maxlength: [50000, 'email cannot exceed 50000 characters']
                            },
                            date_of_birth: {
                                type: Date,
                                required: [true, 'date_of_birth is required']
                            }
            });
            module.exports = studentModel;
        