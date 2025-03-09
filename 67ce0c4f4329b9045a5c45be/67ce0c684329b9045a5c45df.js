
            const mongoose = require('mongoose');
            const usersModel = mongoose.model('users67ce0c684329b9045a5c45df', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            age: {
                                type: String,
                                required: [false, 'age is required'],
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                            }
            });
            module.exports = usersModel;
        