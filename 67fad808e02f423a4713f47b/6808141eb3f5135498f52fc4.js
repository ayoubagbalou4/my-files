
            const mongoose = require('mongoose');
            const la casaModel = mongoose.model('la casa6808141eb3f5135498f52fc4', {
                
                            name: {
                                type: String,
                                required: [false, 'name is required'],
                                minlength: [null, 'name must be at least null characters'],
                                maxlength: [null, 'name cannot exceed null characters']
                            }
            });
            module.exports = la casaModel;
        