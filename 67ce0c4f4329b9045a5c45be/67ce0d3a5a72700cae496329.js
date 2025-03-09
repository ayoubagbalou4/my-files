
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67ce0d3a5a72700cae496329', {
                
                            xnb_b: {
                                type: String,
                                required: [false, 'xnb_b is required'],
                            }
            });
            module.exports = testModel;
        