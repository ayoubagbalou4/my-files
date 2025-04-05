
            const mongoose = require('mongoose');
            const testtModel = mongoose.model('testt67f168361292759e1697fc79', {
                
                            nada: {
                                type: String,
                                required: [false, 'nada is required'],
                            },
                            nada: {
                                type: String, 
                                required: [true, 'nada is required'],
                                enum: ["hi", "test", "cdd"]                            }
            });
            module.exports = testtModel;
        