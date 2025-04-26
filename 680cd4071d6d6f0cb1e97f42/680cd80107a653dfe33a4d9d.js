
            const mongoose = require('mongoose');
            const postModel = mongoose.model('post680cd80107a653dfe33a4d9d', {
                
                            Golden_Aura_: {
                                type: String,
                                required: [false, 'Golden_Aura_ is required'],
                                minlength: [null, 'Golden_Aura_ must be at least null characters'],
                                maxlength: [null, 'Golden_Aura_ cannot exceed null characters']
                            }
            });
            module.exports = postModel;
        