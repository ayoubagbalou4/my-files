
            const mongoose = require('mongoose');
            const productModel = mongoose.model('product6821d537f61ea9eaabee5804', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            },
                            description: {
                                type: String,
                                required: [false, 'description is required'],
                                minlength: [null, 'description must be at least null characters'],
                                maxlength: [null, 'description cannot exceed null characters']
                            },
                            price: {
                                type: Number,
                                required: [false, 'price is required'],
                                min: [15, 'price must be at least 15'],
                                max: [45, 'price cannot exceed 45']
                            }
            });
            module.exports = productModel;
        