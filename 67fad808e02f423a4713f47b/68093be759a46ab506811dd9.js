
            const mongoose = require('mongoose');
            const MichealModel = mongoose.model('Micheal68093be759a46ab506811dd9', {
                
                            nada: {
                                type: String,
                                required: [false, 'nada is required'],
                                minlength: [2, 'nada must be at least 2 characters'],
                                maxlength: [3, 'nada cannot exceed 3 characters']
                            },
                            ayoub: {
                                type: String,
                                required: [false, 'ayoub is required'],
                                minlength: [null, 'ayoub must be at least null characters'],
                                maxlength: [null, 'ayoub cannot exceed null characters']
                            }
            });
            module.exports = MichealModel;
        