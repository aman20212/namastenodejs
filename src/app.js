const express = require('express');
const app = express();
const connectDB = require("./config/database");
const User = require("./models/users");

const { adminAuth, userAuth } = require('./middlewares/auth');

app.use(express.json());

app.post("/signup", async (req, res) => {
    // Creating a new instance of the User model
    const user = new User(req.body);
    try {
        await user.save();
        res.send("User Added successfully!");
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }
});


connectDB().then(() => {
    console.log('DB Connection was successful');
    app.listen((3000), () => {
        console.log('Server is up and running on port 3000');
    })
}).catch((error) => {
    console.log('DB Connection failed::', error);
})