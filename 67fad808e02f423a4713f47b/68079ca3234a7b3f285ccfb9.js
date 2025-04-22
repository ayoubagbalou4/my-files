
            const mongoose = require('mongoose');
            const blindspotModel = mongoose.model('blindspot68079ca3234a7b3f285ccfb9', {
                
                            nada: {
                                type: String,
                                required: [true, 'nada is required'],
                                minlength: [15, 'nada must be at least 15 characters'],
                                maxlength: [25, 'nada cannot exceed 25 characters']
                            },
                            Golden_Aura: {
                                type: String,
                                required: [false, 'Golden_Aura is required'],
                                minlength: [30, 'Golden_Aura must be at least 30 characters'],
                                maxlength: [266, 'Golden_Aura cannot exceed 266 characters']
                            },
                            age: {
                                type: Number,
                                required: [false, 'age is required'],
                                min: [20, 'age must be at least 20'],
                                max: [50, 'age cannot exceed 50']
                            }
            });
            module.exports = blindspotModel;
        