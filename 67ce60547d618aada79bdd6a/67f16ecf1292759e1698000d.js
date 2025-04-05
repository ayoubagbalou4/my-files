
            const mongoose = require('mongoose');
            const postModel = mongoose.model('post67f16ecf1292759e1698000d', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            description: {
                                type: String,
                                required: [false, 'description is required'],
                            }
            });
            module.exports = postModel;
        