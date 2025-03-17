
            const mongoose = require('mongoose');
            const teachersModel = mongoose.model('teachers67d87ab433fd8dcdfdc35efa', {
                
                            sx: {
                                type: String, 
                                required: [false, 'sx is required'],
                                enum: ["f", "fd"]
                            },
                            cd: {
                                type: String,
                                required: [false, 'cd is required'],
                            }
            });
            module.exports = teachersModel;
        