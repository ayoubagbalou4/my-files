
            const mongoose = require('mongoose');
            const postModel = mongoose.model('post680f7b4c898e52aecda7ada1', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            },
                            description: {
                                type: String,
                                required: [false, 'description is required'],
                                minlength: [null, 'description must be at least null characters'],
                                maxlength: [null, 'description cannot exceed null characters']
                            },
                            date: {
                                type: Date,
                                required: [false, 'date is required']
                            },
                            category: {
                                type: String,
                                required: [false, 'category is required'],
                                minlength: [null, 'category must be at least null characters'],
                                maxlength: [null, 'category cannot exceed null characters']
                            }
            });
            module.exports = postModel;
        