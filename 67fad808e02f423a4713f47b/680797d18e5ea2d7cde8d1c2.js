
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user680797d18e5ea2d7cde8d1c2', {
                
                            nada: {
                                type: String,
                                required: [false, 'nada is required'],
                            }
            });
            module.exports = userModel;
        