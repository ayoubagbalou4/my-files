
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user67ccc1dc2e768291b4a25132', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            age: {
                                type: Number,
                                required: [true, 'age is required'],
                            },
                            address: {
                                type: String,
                                required: [false, 'address is required'],
                            }
            });
            module.exports = userModel;
        