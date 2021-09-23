const errlab = require('./index.js');
const expres = require('express');
const app = expres();

app.get('/', (req, res)=> {
    res.send(new errlab.legend({
        message: "Test legend errors"
      }).user());
});

app.listen(3000, ()=> {
    console.log('Server on port 3000');
});