
            const mongoose = require('mongoose');
            const teacherstudentModel = mongoose.model('teacherstudent670c1187cad3633ae652b08e', {
                
                            teacher_id: {
                                type: String,
                                required: [true, 'teacher_id is required'],
                                minlength: [0, 'teacher_id must be at least 3 characters long'],
                                maxlength: [50000, 'teacher_id cannot exceed 50000 characters']
                            },
                            student_id: {
                                type: String,
                                required: [true, 'student_id is required'],
                                minlength: [0, 'student_id must be at least 3 characters long'],
                                maxlength: [50000, 'student_id cannot exceed 50000 characters']
                            }
            });
            module.exports = teacherstudentModel;
        