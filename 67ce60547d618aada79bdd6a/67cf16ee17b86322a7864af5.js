
            const mongoose = require('mongoose');
            const usersModel = mongoose.model('users67cf16ee17b86322a7864af5', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                            },
                            address: {
                                type: String,
                                required: [false, 'address is required'],
                            },
                            date_birth: {
                                type: Date,
                                required: [false, 'date_birth is required']
                            }
            });
            module.exports = usersModel;
        