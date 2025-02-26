
            const mongoose = require('mongoose');
            const teachersModel = mongoose.model('teachers67bf87d3d03457b29c4f6de6', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                            },
                            salaire: {
                                type: Number,
                                required: [false, 'salaire is required'],
                            },
                            date_birth: {
                                type: Date,
                                required: [false, 'date_birth is required']
                            }
            });
            module.exports = teachersModel;
        