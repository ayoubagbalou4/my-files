
            const mongoose = require('mongoose');
            const testModel = mongoose.model('test68113b394eddc317cd97ef9b', {
                
                            nada: {
                                type: String, 
                                required: [false, 'nada is required']
                            },
                            nadads: {
                                type: String,
                                required: [false, 'nadads is required'],
                                minlength: [null, 'nadads must be at least null characters'],
                                maxlength: [null, 'nadads cannot exceed null characters']
                            }
            });
            module.exports = testModel;
        