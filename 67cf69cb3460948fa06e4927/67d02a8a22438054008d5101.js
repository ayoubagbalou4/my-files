
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67d02a8a22438054008d5101', {
                
                            img: {
                                type: String, // Assuming storing image as a URL or path
                                required: [false, 'img is required']
                            }
            });
            module.exports = testModel;
        