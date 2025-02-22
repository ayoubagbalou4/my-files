
            const mongoose = require('mongoose');
            const teachersModel = mongoose.model('teachers67ba26314f5e28bb14df0349', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                            },
                            password: {
                                type: String,
                                required: [false, 'password is required'],
                            },
                            date_birth: {
                                type: Date,
                                required: [false, 'date_birth is required']
                            }
            });
            module.exports = teachersModel;
        