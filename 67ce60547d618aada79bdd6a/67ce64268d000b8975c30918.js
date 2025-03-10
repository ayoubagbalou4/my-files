
            const mongoose = require('mongoose');
            const TestModel = mongoose.model('Test67ce64268d000b8975c30918', {
                
                            Name: {
                                type: String,
                                required: [false, 'Name is required'],
                            }
            });
            module.exports = TestModel;
        