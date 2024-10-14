
            const mongoose = require('mongoose');
            const productModel = mongoose.model('product670ceef843173cac34a81b5b', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            },
                            price: {
                                type: Number,
                                required: [true, 'price is required'],
                                min: [0, 'price must be at least 0'],
                                max: [100000, 'price cannot exceed 100000']
                            }
            });
            module.exports = productModel;
        