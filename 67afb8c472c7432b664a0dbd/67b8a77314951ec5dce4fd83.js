
            const mongoose = require('mongoose');
            const ffModel = mongoose.model('ff67b8a77314951ec5dce4fd83', {
                
                            ff: {
                                type: String,
                                required: [false, 'ff is required'],
                            }
            });
            module.exports = ffModel;
        