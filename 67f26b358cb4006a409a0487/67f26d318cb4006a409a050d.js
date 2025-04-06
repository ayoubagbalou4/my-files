
            const mongoose = require('mongoose');
            const postModel = mongoose.model('post67f26d318cb4006a409a050d', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            description: {
                                type: String,
                                required: [false, 'description is required'],
                            },
                            date: {
                                type: Date,
                                required: [false, 'date is required']
                            }
            });
            module.exports = postModel;
        