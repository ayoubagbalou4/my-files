
            const mongoose = require('mongoose');
            const postModel = mongoose.model('post680cc9185a9284a024ec7fc2', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            },
                            date: {
                                type: Date,
                                required: [false, 'date is required']
                            },
                            desc: {
                                type: String,
                                required: [false, 'desc is required'],
                                minlength: [null, 'desc must be at least null characters'],
                                maxlength: [null, 'desc cannot exceed null characters']
                            }
            });
            module.exports = postModel;
        