
            const mongoose = require('mongoose');
            const ilyasModel = mongoose.model('ilyas67de1021468ea7eb560af563', {
                
                            user: {
                                type: String,
                                required: [false, 'user is required'],
                            },
                            test: {
                                type: String,
                                required: [false, 'test is required'],
                            }
            });
            module.exports = ilyasModel;
        