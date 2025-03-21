
            const mongoose = require('mongoose');
            const studentsModel = mongoose.model('students67dd51ab72dde53aeb7dc1cc', {
                
                            First_Name: {
                                type: String,
                                required: [false, 'First_Name is required'],
                            }
            });
            module.exports = studentsModel;
        