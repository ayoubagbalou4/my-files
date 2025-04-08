
            const mongoose = require('mongoose');
            const postsModel = mongoose.model('posts67f16ecf1292759e1698000d', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            description: {
                                type: String,
                                required: [false, 'description is required'],
                            }
            });
            module.exports = postsModel;
        