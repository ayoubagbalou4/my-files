
            const mongoose = require('mongoose');
            const usersModel = mongoose.model('users67ce12bcfcd213c10568887b', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                            },
                            date_birth: {
                                type: Date,
                                required: [false, 'date_birth is required']
                            }
            });
            module.exports = usersModel;
        