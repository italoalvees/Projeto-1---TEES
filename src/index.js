const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');
let date, timeElapsed;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/signin', authRoutes);


app.listen(port, () => {
    timeElapsed = Date.now();
    date = new Date(timeElapsed).toUTCString()
    console.log(`Servidor iniciado em: http://localhost:${port} em ${date}`)
});









