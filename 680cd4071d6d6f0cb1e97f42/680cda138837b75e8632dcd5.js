
            const mongoose = require('mongoose');
            const yssModel = mongoose.model('yss680cda138837b75e8632dcd5', {
                
                            dc: {
                                type: String,
                                required: [false, 'dc is required'],
                                minlength: [null, 'dc must be at least null characters'],
                                maxlength: [null, 'dc cannot exceed null characters']
                            }
            });
            module.exports = yssModel;
        