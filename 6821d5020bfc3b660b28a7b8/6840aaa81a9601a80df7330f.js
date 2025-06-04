
            const mongoose = require('mongoose');
            const tesdModel = mongoose.model('tesd6840aaa81a9601a80df7330f', {
                
                            img: {
                                type: String, 
                                required: [false, 'img is required']
                            }
            });
            module.exports = tesdModel;
        