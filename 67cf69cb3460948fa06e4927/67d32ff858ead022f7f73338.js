
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test67d32ff858ead022f7f73338', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            gender: {
                                type: String, // Assuming storing image as a URL or path
                                required: [false, 'gender is required'],
                                emum:[home,femme]
                            }
            });
            module.exports = testModel;
        