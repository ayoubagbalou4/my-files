
            const mongoose = require('mongoose');
            const ProductModel = mongoose.model('Product68101926681b8d09891e4fed', {
                
                            Name: {
                                type: String,
                                required: [false, 'Name is required'],
                                minlength: [null, 'Name must be at least null characters'],
                                maxlength: [null, 'Name cannot exceed null characters']
                            },
                            Price: {
                                type: Number,
                                required: [false, 'Price is required'],
                                min: [null, 'Price must be at least null'],
                                max: [null, 'Price cannot exceed null']
                            }
            });
            module.exports = ProductModel;
        