
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test66fdbeb72600fe0a1af38873', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            }
            });
            module.exports = testModel;
        