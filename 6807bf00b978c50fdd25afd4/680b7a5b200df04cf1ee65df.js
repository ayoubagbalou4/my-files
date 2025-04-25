
            const mongoose = require('mongoose');
            const productModel = mongoose.model('product680b7a5b200df04cf1ee65df', {
                
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
                            quantity: {
                                type: Number,
                                required: [false, 'quantity is required'],
                                min: [null, 'quantity must be at least null'],
                                max: [null, 'quantity cannot exceed null']
                            },
                            price: {
                                type: Number,
                                required: [false, 'price is required'],
                                min: [null, 'price must be at least null'],
                                max: [null, 'price cannot exceed null']
                            }
            });
            module.exports = productModel;
        