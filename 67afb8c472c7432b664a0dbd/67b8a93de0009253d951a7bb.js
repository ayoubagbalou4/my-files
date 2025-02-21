
            const mongoose = require('mongoose');
            const hbbModel = mongoose.model('hbb67b8a93de0009253d951a7bb', {
                
                            mm: {
                                type: String,
                                required: [false, 'mm is required'],
                            }
            });
            module.exports = hbbModel;
        