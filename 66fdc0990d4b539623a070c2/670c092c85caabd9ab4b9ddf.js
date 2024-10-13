
            const mongoose = require('mongoose');
            const test2Model = mongoose.model('test2670c092c85caabd9ab4b9ddf', {
                
                            image: {
                                type: String,
                                required: [false, 'image is required'],
                                minlength: [0, 'image must be at least 3 characters long'],
                                maxlength: [50000, 'image cannot exceed 50000 characters']
                            }
            });
            module.exports = test2Model;
        