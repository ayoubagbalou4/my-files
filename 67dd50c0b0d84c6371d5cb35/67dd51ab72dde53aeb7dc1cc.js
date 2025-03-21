
            const mongoose = require('mongoose');
            const studentsModel = mongoose.model('students67dd51ab72dde53aeb7dc1cc', {
                
                            First_Name_: {
                                type: String,
                                required: [false, 'First_Name_ is required'],
                            },
                            Last_Name_: {
                                type: String,
                                required: [false, 'Last_Name_ is required'],
                            },
                            Gender: {
                                type: String, 
                                required: [false, 'Gender is required'],
                                enum: ["Female", "Male"]                            },
                            Age: {
                                type: Number,
                                required: [false, 'Age is required'],
                            },
                            Email: {
                                type: String,
                                required: [false, 'Email is required'],
                            },
                            Salary: {
                                type: Number,
                                required: [false, 'Salary is required'],
                            }
            });
            module.exports = studentsModel;
        