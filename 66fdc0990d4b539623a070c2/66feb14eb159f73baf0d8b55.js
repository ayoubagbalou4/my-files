
            const mongoose = require('mongoose');
            const orderModel = mongoose.model('order66feb14eb159f73baf0d8b55', {
                
                            user_id: {
                                type: String,
                                required: [true, 'user_id is required'],
                                minlength: [0, 'user_id must be at least 3 characters long'],
                                maxlength: [50000, 'user_id cannot exceed 50000 characters']
                            },
                            amount: {
                                type: Number,
                                required: [true, 'amount is required'],
                                min: [0, 'amount must be at least 0'],
                                max: [100000, 'amount cannot exceed 100000']
                            }
            });
            module.exports = orderModel;
        