
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test66fc74d42864c01473ec2d2b', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            }
            });
            module.exports = testModel;
        