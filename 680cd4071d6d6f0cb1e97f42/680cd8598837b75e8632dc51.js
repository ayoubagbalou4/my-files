
            const mongoose = require('mongoose');
            const hhdModel = mongoose.model('hhd680cd8598837b75e8632dc51', {
                
                            x: {
                                type: String,
                                required: [false, 'x is required'],
                                minlength: [null, 'x must be at least null characters'],
                                maxlength: [null, 'x cannot exceed null characters']
                            }
            });
            module.exports = hhdModel;
        