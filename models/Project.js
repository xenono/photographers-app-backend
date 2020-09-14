const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        reqired: true,
    },
    message: {
        type: String,
        required: true,
    },
});

mongoose.model("project", ProjectSchema);
