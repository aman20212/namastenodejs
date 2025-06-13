const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Hello from express server');
})

app.listen(3000, () => {
    console.log('Server is up and running on port 3000....');
});