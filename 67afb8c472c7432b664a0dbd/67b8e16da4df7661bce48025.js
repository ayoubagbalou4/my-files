
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67b8e16da4df7661bce48025', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            }
            });
            module.exports = testModel;
        