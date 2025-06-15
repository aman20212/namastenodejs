const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://balwantsingh:9986163715@namastenode.evlh7fq.mongodb.net/devTinder');
}

module.exports = connectDB;
