
            const mongoose = require('mongoose');
            const uhhModel = mongoose.model('uhh67b8a9082a98e35afd4183e1', {
                
                            jjk: {
                                type: String,
                                required: [false, 'jjk is required'],
                            }
            });
            module.exports = uhhModel;
        