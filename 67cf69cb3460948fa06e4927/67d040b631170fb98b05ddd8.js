
            const mongoose = require('mongoose');
            const hhuhModel = mongoose.model('hhuh67d040b631170fb98b05ddd8', {
                
                            img1: {
                                type: String, // Assuming storing image as a URL or path
                                required: [false, 'img1 is required']
                            },
                            img2: {
                                type: String, // Assuming storing image as a URL or path
                                required: [false, 'img2 is required']
                            },
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            }
            });
            module.exports = hhuhModel;
        