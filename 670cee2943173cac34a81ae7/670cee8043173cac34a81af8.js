
            const mongoose = require('mongoose');
            const clientModel = mongoose.model('client670cee8043173cac34a81af8', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [5, 'name must be at least 5 characters long'],
                                maxlength: [30, 'name cannot exceed 30 characters']
                            },
                            phone: {
                                type: String,
                                required: [true, 'phone is required'],
                                minlength: [0, 'phone must be at least 3 characters long'],
                                maxlength: [50000, 'phone cannot exceed 50000 characters']
                            },
                            email: {
                                type: String,
                                required: [true, 'email is required'],
                                minlength: [0, 'email must be at least 3 characters long'],
                                maxlength: [50000, 'email cannot exceed 50000 characters']
                            }
            });
            module.exports = clientModel;
        