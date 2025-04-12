
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user67fad98fe02f423a4713f4e6', {
                
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
        