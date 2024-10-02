
            const mongoose = require('mongoose');
            const nnModel = mongoose.model('nn66fdbff50d4b539623a070ae', {
                
                            na: {
                                type: String,
                                required: [false, 'na is required'],
                                minlength: [0, 'na must be at least 3 characters long'],
                                maxlength: [50000, 'na cannot exceed 50000 characters']
                            }
            });
            module.exports = nnModel;
        