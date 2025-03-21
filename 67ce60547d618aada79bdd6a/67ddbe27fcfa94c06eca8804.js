
            const mongoose = require('mongoose');
            const testtModel = mongoose.model('testt67ddbe27fcfa94c06eca8804', {
                
                            first_name: {
                                type: String,
                                required: [false, 'first_name is required'],
                            }
            });
            module.exports = testtModel;
        