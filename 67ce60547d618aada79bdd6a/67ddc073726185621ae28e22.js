
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67ddc073726185621ae28e22', {
                
                            Ocean_Breeze_: {
                                type: String,
                                required: [false, 'Ocean_Breeze_ is required'],
                            }
            });
            module.exports = testModel;
        