
            const mongoose = require('mongoose');
            const studentsModel = mongoose.model('students67b78944fb05228f7e3a1370', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            date: {
                                type: Date,
                                required: [false, 'date is required']
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                            }
            });
            module.exports = studentsModel;
        