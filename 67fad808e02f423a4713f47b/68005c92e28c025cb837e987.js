
            const mongoose = require('mongoose');
            const likesModel = mongoose.model('likes68005c92e28c025cb837e987', {
                
                            user_id: {
                                type: String,
                                required: [false, 'user_id is required'],
                            },
                            post_id: {
                                type: String,
                                required: [false, 'post_id is required'],
                            },
                            date: {
                                type: Date,
                                required: [false, 'date is required']
                            }
            });
            module.exports = likesModel;
        