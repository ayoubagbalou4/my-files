
            const mongoose = require('mongoose');
            const hhhhModel = mongoose.model('hhhh66fc7f0b0e7b063f163fe032', {
                
                            jj: {
                                type: String,
                                required: [false, 'jj is required'],
                                minlength: [0, 'jj must be at least 3 characters long'],
                                maxlength: [50000, 'jj cannot exceed 50000 characters']
                            }
            });
            module.exports = hhhhModel;
        