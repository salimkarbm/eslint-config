const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.model(
    'Configuration',
    new Schema({
        key: String,
        value: Schema.Types.Mixed,
        type: String,
    })
);
