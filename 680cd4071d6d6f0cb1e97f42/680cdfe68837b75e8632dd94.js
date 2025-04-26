
            const mongoose = require('mongoose');
            const playerModel = mongoose.model('player680cdfe68837b75e8632dd94', {
                
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
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                                minlength: [null, 'email must be at least null characters'],
                                maxlength: [null, 'email cannot exceed null characters']
                            }
            });
            module.exports = playerModel;
        