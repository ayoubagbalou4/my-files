
            const mongoose = require('mongoose');
            const breakModel = mongoose.model('break68079c18879652b5eb8f1903', {
                
                            ayoub: {
                                type: String,
                                required: [false, 'ayoub is required'],
                                minlength: [20, 'ayoub must be at least 20 characters']
                                maxlength: [30, 'ayoub cannot exceed 30 characters']
                            },
                            nada: {
                                type: Number,
                                required: [false, 'nada is required'],
                                minlength: [15, 'nada must be at least 15 numbers']
                                maxlength: [19, 'nada cannot exceed 19 numbers']
                            },
                            date: {
                                type: Date,
                                required: [false, 'date is required']
                            }
            });
            module.exports = breakModel;
        