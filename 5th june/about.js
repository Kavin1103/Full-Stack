const express = require('express');
const app = express();
app.get('/about', (req, res) => {
    res.send('This is the about page\n');
});
app.listen(8001, ()=>{
    console.log('Server running at http://localhost:8001/');
});