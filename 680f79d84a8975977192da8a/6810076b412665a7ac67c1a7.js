
            const mongoose = require('mongoose');
            const hhhModel = mongoose.model('hhh6810076b412665a7ac67c1a7', {
                
                            cd: {
                                type: String,
                                required: [false, 'cd is required'],
                                minlength: [null, 'cd must be at least null characters'],
                                maxlength: [null, 'cd cannot exceed null characters']
                            }
            });
            module.exports = hhhModel;
        