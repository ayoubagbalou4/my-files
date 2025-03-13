
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67d32da99a1ee78b857ad97f', {
                
                            test: {
                                type: String,
                                required: [false, 'test is required'],
                            }
            });
            module.exports = testModel;
        