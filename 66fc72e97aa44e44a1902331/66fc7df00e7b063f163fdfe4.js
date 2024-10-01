
            const mongoose = require('mongoose');
            const hhhhModel = mongoose.model('hhhh66fc7df00e7b063f163fdfe4', {
                
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                                min: [0, 'age must be at least 0'],
                                max: [100000, 'age cannot exceed 100000']
                            }
            });
            module.exports = hhhhModel;
        