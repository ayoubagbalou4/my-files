
            const mongoose = require('mongoose');
            const nameModel = mongoose.model('name67d332a777bb0902fe5f5076', {
                
                            gender: {
                                type: String, 
                                required: [false, 'gender is required'],
                                emum:[homme,femme]
                            },
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                            }
            });
            module.exports = nameModel;
        