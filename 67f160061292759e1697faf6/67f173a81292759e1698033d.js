
            const mongoose = require('mongoose');
            const postModel = mongoose.model('post67f173a81292759e1698033d', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            img: {
                                type: String, 
                                required: [false, 'img is required']
                            }
            });
            module.exports = postModel;
        