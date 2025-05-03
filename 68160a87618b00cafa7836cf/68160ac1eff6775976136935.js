
            const mongoose = require('mongoose');
            const productModel = mongoose.model('product68160ac1eff6775976136935', {
                
                            title: {
                                type: String,
                                required: [false, 'title is required'],
                                minlength: [null, 'title must be at least null characters'],
                                maxlength: [null, 'title cannot exceed null characters']
                            },
                            price: {
                                type: Number,
                                required: [false, 'price is required'],
                                min: [null, 'price must be at least null'],
                                max: [null, 'price cannot exceed null']
                            },
                            description: {
                                type: String,
                                required: [false, 'description is required'],
                                minlength: [null, 'description must be at least null characters'],
                                maxlength: [null, 'description cannot exceed null characters']
                            }
            });
            module.exports = productModel;
        