
            const mongoose = require('mongoose');
            const imggsModel = mongoose.model('imggs67d8921c2cecf6915bf5fd36', {
                
                            img1: {
                                type: String, 
                                required: [false, 'img1 is required']
                            },
                            img2: {
                                type: String, 
                                required: [false, 'img2 is required']
                            },
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            }
            });
            module.exports = imggsModel;
        