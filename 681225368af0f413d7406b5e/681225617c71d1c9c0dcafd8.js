
            const mongoose = require('mongoose');
            const hyhModel = mongoose.model('hyh681225617c71d1c9c0dcafd8', {
                
                            hy: {
                                type: String,
                                required: [false, 'hy is required'],
                                minlength: [null, 'hy must be at least null characters'],
                                maxlength: [null, 'hy cannot exceed null characters']
                            }
            });
            module.exports = hyhModel;
        