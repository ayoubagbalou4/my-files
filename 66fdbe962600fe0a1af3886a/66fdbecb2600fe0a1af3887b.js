
            const mongoose = require('mongoose');
            const test2Model = mongoose.model('test266fdbecb2600fe0a1af3887b', {
                
                            name: {
                                type: String,
                                required: [true, 'name is required'],
                                minlength: [0, 'name must be at least 3 characters long'],
                                maxlength: [50000, 'name cannot exceed 50000 characters']
                            }
            });
            module.exports = test2Model;
        