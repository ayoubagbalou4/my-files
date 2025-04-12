
            const mongoose = require('mongoose');
            const post Model = mongoose.model('post 67fad8f3e02f423a4713f4c8', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            desc: {
                                type: String,
                                required: [false, 'desc is required'],
                            }
            });
            module.exports = post Model;
        