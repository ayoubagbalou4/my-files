
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user67faa7131d75f3a67f13ced7', {
                
                            img: {
                                type: String, 
                                required: [false, 'img is required']
                            }
            });
            module.exports = userModel;
        