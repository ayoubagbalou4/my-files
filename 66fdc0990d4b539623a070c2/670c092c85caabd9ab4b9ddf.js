
            const mongoose = require('mongoose');
            const test2Model = mongoose.model('test2670c092c85caabd9ab4b9ddf', {
                
                            img: {
                                type: String,
                                required: [true, 'img is required'],
                                minlength: [0, 'img must be at least 3 characters long'],
                                maxlength: [50000, 'img cannot exceed 50000 characters']
                            }
            });
            module.exports = test2Model;
        