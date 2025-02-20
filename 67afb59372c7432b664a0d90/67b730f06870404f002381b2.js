
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user67b730f06870404f002381b2', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                            }
            });
            module.exports = userModel;
        