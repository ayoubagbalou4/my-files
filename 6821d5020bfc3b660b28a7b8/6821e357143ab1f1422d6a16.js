
            const mongoose = require('mongoose');
            const orderModel = mongoose.model('order6821e357143ab1f1422d6a16', {
                
                            user: {
                                type: String,
                                required: [false, 'user is required'],
                                minlength: [null, 'user must be at least null characters'],
                                maxlength: [null, 'user cannot exceed null characters']
                            },
                            product: {
                                type: String,
                                required: [false, 'product is required'],
                                minlength: [null, 'product must be at least null characters'],
                                maxlength: [null, 'product cannot exceed null characters']
                            },
                            amount: {
                                type: Number,
                                required: [false, 'amount is required'],
                                min: [null, 'amount must be at least null'],
                                max: [null, 'amount cannot exceed null']
                            }
            });
            module.exports = orderModel;
        