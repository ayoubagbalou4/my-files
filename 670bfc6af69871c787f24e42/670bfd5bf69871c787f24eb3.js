
            const mongoose = require('mongoose');
            const teacherModel = mongoose.model('teacher670bfd5bf69871c787f24eb3', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            },
                            date_birth: {
                                type: Date,
                                required: [true, 'date_birth is required']
                            },
                            profile: {
                                type: String,
                                required: [true, 'profile is required'],
                                minlength: [0, 'profile must be at least 3 characters long'],
                                maxlength: [50000, 'profile cannot exceed 50000 characters']
                            }
            });
            module.exports = teacherModel;
        