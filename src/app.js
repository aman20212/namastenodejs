const express = require('express');
const app = express();

app.use('/user', (req, res) => {
    res.send('Hello from user')
})

app.get('/user', (req, res) => {
    res.send({ firstName: 'Aman', lastName: 'Singh' })
})

app.post('/user', (req, res) => {
    res.send('User data saved successfully in the DB')
})

app.delete('/user', (req, res) => {
    res.send('User Deleted from DB');
})

app.use('/', (req, res) => {
    res.send('Hello from express server');
})

app.listen(3000, () => {
    console.log('Server is up and running on port 3000....');
});