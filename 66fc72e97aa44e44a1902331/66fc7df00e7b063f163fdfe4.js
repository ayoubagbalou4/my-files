
            const mongoose = require('mongoose');
            const hhhhModel = mongoose.model('hhhh66fc7df00e7b063f163fdfe4', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            }
            });
            module.exports = hhhhModel;
        