
            const mongoose = require('mongoose');
            const ttsxModel = mongoose.model('ttsx67cdecb5224581495731e888', {
                
                            cd: {
                                type: String,
                                required: [false, 'cd is required'],
                            }
            });
            module.exports = ttsxModel;
        