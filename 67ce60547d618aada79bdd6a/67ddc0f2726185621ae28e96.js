
            const mongoose = require('mongoose');
            const tttssModel = mongoose.model('tttss67ddc0f2726185621ae28e96', {
                
                            Golden_Aura: {
                                type: String,
                                required: [false, 'Golden_Aura is required'],
                            }
            });
            module.exports = tttssModel;
        