
            const mongoose = require('mongoose');
            const productModel = mongoose.model('product681538b80aedd09feeddc580', {
                
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
                            }
            });
            module.exports = productModel;
        