
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test66fe983f3d332e94e81a7f99', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            },
                            image: {
                                type: String,
                                required: [true, 'image is required'],
                                minlength: [0, 'image must be at least 3 characters long'],
                                maxlength: [50000, 'image cannot exceed 50000 characters']
                            }
            });
            module.exports = testModel;
        