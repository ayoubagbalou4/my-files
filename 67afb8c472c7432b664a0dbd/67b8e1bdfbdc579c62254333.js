
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67b8e1bdfbdc579c62254333', {
                
                            age: {
                                type: String,
                                required: [false, 'age is required'],
                            },
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            }
            });
            module.exports = testModel;
        