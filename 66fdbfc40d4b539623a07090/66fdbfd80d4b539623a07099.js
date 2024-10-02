
            const mongoose = require('mongoose');
            const test2Model = mongoose.model('test266fdbfd80d4b539623a07099', {
                
                            test22: {
                                type: String,
                                required: [false, 'test22 is required'],
                                minlength: [0, 'test22 must be at least 3 characters long'],
                                maxlength: [50000, 'test22 cannot exceed 50000 characters']
                            }
            });
            module.exports = test2Model;
        