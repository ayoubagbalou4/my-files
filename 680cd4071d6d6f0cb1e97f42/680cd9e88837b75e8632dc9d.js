
            const mongoose = require('mongoose');
            const cscModel = mongoose.model('csc680cd9e88837b75e8632dc9d', {
                
                            jnj: {
                                type: String,
                                required: [false, 'jnj is required'],
                                minlength: [null, 'jnj must be at least null characters'],
                                maxlength: [null, 'jnj cannot exceed null characters']
                            }
            });
            module.exports = cscModel;
        