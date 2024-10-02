
            const mongoose = require('mongoose');
            const ana Model = mongoose.model('ana 66fdcb28c110c7ea6fc8ba8f', {
                
                            ansali: {
                                type: String,
                                required: [false, 'ansali is required'],
                                minlength: [0, 'ansali must be at least 3 characters long'],
                                maxlength: [50000, 'ansali cannot exceed 50000 characters']
                            }
            });
            module.exports = ana Model;
        