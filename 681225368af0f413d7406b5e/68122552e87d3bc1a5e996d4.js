
            const mongoose = require('mongoose');
            const johModel = mongoose.model('joh68122552e87d3bc1a5e996d4', {
                
                            john: {
                                type: String,
                                required: [false, 'john is required'],
                                minlength: [null, 'john must be at least null characters'],
                                maxlength: [null, 'john cannot exceed null characters']
                            },
                            nada: {
                                type: String,
                                required: [false, 'nada is required'],
                                minlength: [null, 'nada must be at least null characters'],
                                maxlength: [null, 'nada cannot exceed null characters']
                            },
                            carmelajroland: {
                                type: String,
                                required: [false, 'carmelajroland is required'],
                                minlength: [null, 'carmelajroland must be at least null characters'],
                                maxlength: [null, 'carmelajroland cannot exceed null characters']
                            },
                            ayoub: {
                                type: String,
                                required: [false, 'ayoub is required'],
                                minlength: [null, 'ayoub must be at least null characters'],
                                maxlength: [null, 'ayoub cannot exceed null characters']
                            }
            });
            module.exports = johModel;
        