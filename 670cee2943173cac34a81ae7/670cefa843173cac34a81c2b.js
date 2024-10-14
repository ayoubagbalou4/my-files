
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test670cefa843173cac34a81c2b', {
                
                            image: {
                                type: String,
                                required: [true, 'image is required'],
                                minlength: [0, 'image must be at least 3 characters long'],
                                maxlength: [50000, 'image cannot exceed 50000 characters']
                            },
                            date: {
                                type: Date,
                                required: [true, 'date is required']
                            }
            });
            module.exports = testModel;
        