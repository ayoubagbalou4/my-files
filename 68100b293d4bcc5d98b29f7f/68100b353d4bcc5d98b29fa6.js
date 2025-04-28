
            const mongoose = require('mongoose');
            const ncModel = mongoose.model('nc68100b353d4bcc5d98b29fa6', {
                
                            dcd: {
                                type: String,
                                required: [false, 'dcd is required'],
                                minlength: [null, 'dcd must be at least null characters'],
                                maxlength: [null, 'dcd cannot exceed null characters']
                            }
            });
            module.exports = ncModel;
        