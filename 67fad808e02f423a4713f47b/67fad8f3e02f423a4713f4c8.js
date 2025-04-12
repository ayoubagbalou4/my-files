
            const mongoose = require('mongoose');
            const postModel = mongoose.model('post67fad8f3e02f423a4713f4c8', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            desc: {
                                type: String,
                                required: [false, 'desc is required'],
                            },
                            date: {
                                type: Date,
                                required: [false, 'date is required']
                            }
            });
            module.exports = postModel;
        