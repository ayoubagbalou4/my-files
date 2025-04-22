
            const mongoose = require('mongoose');
            const blindspotModel = mongoose.model('blindspot68079ca3234a7b3f285ccfb9', {
                
                            ayoub: {
                                type: Number,
                                required: [false, 'ayoub is required'],
                                minlength: [10, 'ayoub must be at least 10 numbers'],
                                maxlength: [20, 'ayoub cannot exceed 20 numbers']
                            },
                            nada: {
                                type: String,
                                required: [true, 'nada is required'],
                                minlength: [15, 'nada must be at least 15 characters'],
                                maxlength: [25, 'nada cannot exceed 25 characters']
                            }
            });
            module.exports = blindspotModel;
        