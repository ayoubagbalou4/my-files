
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user680e55e178455789b048d8b4', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            },
                            age: {
                                type: Number,
                                required: [true, 'age is required'],
                                min: [18, 'age must be at least 18'],
                                max: [65, 'age cannot exceed 65']
                            },
                            email: {
                                type: String,
                                required: [false, 'email is required'],
                                minlength: [null, 'email must be at least null characters'],
                                maxlength: [null, 'email cannot exceed null characters']
                            }
            });
            module.exports = userModel;
        