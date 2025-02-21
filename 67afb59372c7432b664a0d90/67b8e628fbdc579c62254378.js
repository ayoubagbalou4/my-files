
            const mongoose = require('mongoose');
            const usersModel = mongoose.model('users67b8e628fbdc579c62254378', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            }
            });
            module.exports = usersModel;
        