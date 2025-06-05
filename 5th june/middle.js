const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
            <input type="text" name="name" placeholder="Enter your name"><br>
            <input type="email" name="email" placeholder="Enter your email"><br>
            <input type="submit" value="Submit">
        </form>
    `);
});


app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Form submitted successfully!<br>Name: ${name}<br>Email: ${email}`);
});

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});