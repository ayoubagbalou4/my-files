
            const mongoose = require('mongoose');
            const studentModel = mongoose.model('student66fdc3c20d4b539623a0717a', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            }
            });
            module.exports = studentModel;
        