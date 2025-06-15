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

app.get('/user', async (req, res) => {
    try {
        const userEmail = req.body.emailId;
        console.log(userEmail);
        const user = await User.findOne({ emailId: userEmail });
        if (!user) {
            res.status(404).send("User not found");
        } else {
            res.send(user);
        }
    } catch (error) {
        res.status(400).send("Something went wrong ");
    }
});

app.get('/feed', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(400).send("Something went wrong ");
    }

});

app.delete('/user', async (req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete({ _id: userId });
        res.send('User Deleted Successfully');
    } catch (error) {
        res.status(400).send('User Deletion Failed');
    }
});

app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try {
        const user = await User.findByIdAndUpdate({ _id: userId }, data, {
            returnDocument: "after",
        });
        console.log(user);
        res.send("User updated successfully");
    } catch (err) {
        res.status(400).send("Something went wrong ");
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