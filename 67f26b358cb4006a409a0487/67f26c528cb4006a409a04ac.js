
            const mongoose = require('mongoose');
            const postModel = mongoose.model('post67f26c528cb4006a409a04ac', {
                
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
        