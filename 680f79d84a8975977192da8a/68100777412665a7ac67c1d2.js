
            const mongoose = require('mongoose');
            const cccModel = mongoose.model('ccc68100777412665a7ac67c1d2', {
                
                            nada: {
                                type: String,
                                required: [false, 'nada is required'],
                                minlength: [null, 'nada must be at least null characters'],
                                maxlength: [null, 'nada cannot exceed null characters']
                            }
            });
            module.exports = cccModel;
        