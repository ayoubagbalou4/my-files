
            const mongoose = require('mongoose');
            const testtModel = mongoose.model('testt67f168361292759e1697fc79', {
                
                            nada: {
                                type: String,
                                required: [false, 'nada is required'],
                            },
                            ayoub: {
                                type: Date,
                                required: [false, 'ayoub is required']
                            }
            });
            module.exports = testtModel;
        