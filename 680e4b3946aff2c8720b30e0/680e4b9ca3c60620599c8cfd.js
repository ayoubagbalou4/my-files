
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user680e4b9ca3c60620599c8cfd', {
                
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
                            age: {
                                type: Date,
                                required: [false, 'age is required']
                            },
                            gender: {
                                type: String, 
                                required: [false, 'gender is required'],
                                enum: ["male", "female"]                            },
                            datebirth: {
                                type: Date,
                                required: [false, 'datebirth is required']
                            }
            });
            module.exports = userModel;
        