const errlab = require('./index.js');
const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send(new errlab.link({
        message: "Test error link",
        href: "/"
    }).user());
});

app.listen(3000, ()=> {
    console.log('Server on port 3000');
});