
            const mongoose = require('mongoose');
            const clientModel = mongoose.model('client670cecc843173cac34a81ac2', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [5, 'name must be at least 5 characters long'],
                                maxlength: [10, 'name cannot exceed 10 characters']
                            },
                            phone: {
                                type: Number,
                                required: [true, 'phone is required'],
                                min: [0, 'phone must be at least 0'],
                                max: [100000, 'phone cannot exceed 100000']
                            },
                            email: {
                                type: String,
                                required: [true, 'email is required'],
                                minlength: [0, 'email must be at least 3 characters long'],
                                maxlength: [50000, 'email cannot exceed 50000 characters']
                            }
            });
            module.exports = clientModel;
        