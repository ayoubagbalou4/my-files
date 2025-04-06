
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user67f27433b0f1ce66830bc7f5', {
                
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
                            }
            });
            module.exports = userModel;
        