
            const mongoose = require('mongoose');
            const studentsModel = mongoose.model('students67ce1e169dc486ba91f01d0f', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            },
                            salaire: {
                                type: String,
                                required: [false, 'salaire is required'],
                            }
            });
            module.exports = studentsModel;
        