
            const mongoose = require('mongoose');
            const userModel = mongoose.model('user6821dcc3881e5ba057577943', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            },
                            address: {
                                type: String,
                                required: [false, 'address is required'],
                                minlength: [null, 'address must be at least null characters'],
                                maxlength: [null, 'address cannot exceed null characters']
                            },
                            phone: {
                                type: Number,
                                required: [false, 'phone is required'],
                                min: [null, 'phone must be at least null'],
                                max: [null, 'phone cannot exceed null']
                            }
            });
            module.exports = userModel;
        