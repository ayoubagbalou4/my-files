
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test66fd50fe4935c5602656768c', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            }
            });
            module.exports = testModel;
        