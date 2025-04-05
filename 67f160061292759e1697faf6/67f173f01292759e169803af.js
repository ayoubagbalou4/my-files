
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user67f173f01292759e169803af', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            postId: {
                                type: String,
                                required: [false, 'postId is required'],
                            },
                            date: {
                                type: Date,
                                required: [true, 'date is required']
                            }
            });
            module.exports = userModel;
        