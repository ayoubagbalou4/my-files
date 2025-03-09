
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67cdd7f91a458773991b1a5c', {
                
                            ttt: {
                                type: String,
                                required: [false, 'ttt is required'],
                            }
            });
            module.exports = testModel;
        