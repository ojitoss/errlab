const errlab = require('./index.js');
const expres = require('express');
const app = expres();

app.get('/', (req, res)=> {
    res.send(new errlab.table({
        title: "Test error title table",
        type: "Test",
        message: "Test error table"
      }).user());
});

app.listen(3000, ()=> {
    console.log('Server on port 3000');
});