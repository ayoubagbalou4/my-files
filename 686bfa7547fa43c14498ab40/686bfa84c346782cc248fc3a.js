
            const mongoose = require('mongoose');
            const okkModel = mongoose.model('okk686bfa84c346782cc248fc3a', {
                
                            ayouh: {
                                type: Number,
                                required: [false, 'ayouh is required'],
                                min: [null, 'ayouh must be at least null'],
                                max: [null, 'ayouh cannot exceed null']
                            }
            });
            module.exports = okkModel;
        