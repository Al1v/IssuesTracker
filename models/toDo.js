const{Schema, model} = require('mongoose');

const schema = new Schema({
    title:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true,
        default: "open",
    },
    description:{
        type: String,
        required: true,
    }
});

module.exports = model("toDo", schema);