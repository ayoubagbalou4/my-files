
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user6835f47d789fe8752def73ad', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                                min: [null, 'age must be at least null'],
                                max: [null, 'age cannot exceed null']
                            },
                            emaim: {
                                type: String,
                                required: [false, 'emaim is required'],
                                minlength: [null, 'emaim must be at least null characters'],
                                maxlength: [null, 'emaim cannot exceed null characters']
                            }
            });
            module.exports = userModel;
        