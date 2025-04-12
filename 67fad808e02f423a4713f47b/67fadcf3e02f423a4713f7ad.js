
            const mongoose = require('mongoose');
            const playersModel = mongoose.model('players67fadcf3e02f423a4713f7ad', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            image: {
                                type: String, 
                                required: [false, 'image is required']
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                            }
            });
            module.exports = playersModel;
        