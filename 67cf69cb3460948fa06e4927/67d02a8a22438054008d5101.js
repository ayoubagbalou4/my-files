
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67d02a8a22438054008d5101', {
                
                            img: {
                                type: String,
                                required: [false, 'img is required']
                            },
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            }
            });
            module.exports = testModel;
        