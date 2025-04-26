
            const mongoose = require('mongoose');
            const productModel = mongoose.model('product680cd7f407a653dfe33a4d7c', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            }
            });
            module.exports = productModel;
        