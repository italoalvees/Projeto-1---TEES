const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const userRoutes = require('./routes/users.js');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.urlencoded({extended: true}));


app.use('/users', userRoutes);


app.listen(port, () => {
    console.log(`Servidor iniciado em: http://localhost:${port}`)
});









