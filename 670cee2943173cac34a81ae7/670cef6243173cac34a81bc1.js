
            const mongoose = require('mongoose');
            const ordersModel = mongoose.model('orders670cef6243173cac34a81bc1', {
                
                            prodcut_id: {
                                type: String,
                                required: [true, 'prodcut_id is required'],
                                minlength: [0, 'prodcut_id must be at least 3 characters long'],
                                maxlength: [50000, 'prodcut_id cannot exceed 50000 characters']
                            },
                            client_id: {
                                type: String,
                                required: [true, 'client_id is required'],
                                minlength: [0, 'client_id must be at least 3 characters long'],
                                maxlength: [50000, 'client_id cannot exceed 50000 characters']
                            },
                            amount: {
                                type: Number,
                                required: [true, 'amount is required'],
                                min: [0, 'amount must be at least 0'],
                                max: [100000, 'amount cannot exceed 100000']
                            }
            });
            module.exports = ordersModel;
        