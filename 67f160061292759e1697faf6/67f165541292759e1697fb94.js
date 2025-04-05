
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user67f165541292759e1697fb94', {
                
                            name: {
                                type: Number,
                                required: [true, 'name is required'],
                            },
                            test: {
                                type: String, 
                                required: [false, 'test is required']
                            },
                            nada: {
                                type: Number,
                                required: [false, 'nada is required'],
                            }
            });
            module.exports = userModel;
        