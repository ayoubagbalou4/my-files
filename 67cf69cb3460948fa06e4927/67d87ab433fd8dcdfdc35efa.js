
            const mongoose = require('mongoose');
            const usersModel = mongoose.model('users67d87ab433fd8dcdfdc35efa', {
                
                            sx: {
                                type: String, 
                                required: [false, 'sx is required'],
                                enum: ["f", "fd"]
                            },
                            cd: {
                                type: String,
                                required: [false, 'cd is required'],
                            },
                            test: {
                                type: String,
                                required: [false, 'test is required'],
                            }
            });
            module.exports = usersModel;
        