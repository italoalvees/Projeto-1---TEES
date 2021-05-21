const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');
const sequelize = require('./data/database.js')
const User = require('./models/userModel.js')
let date, timeElapsed;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/signin', authRoutes);


app.listen(port, () => {
    qualquerPorra()
    timeElapsed = Date.now();
    date = new Date(timeElapsed).toUTCString()
    console.log(`Servidor iniciado em: http://localhost:${port} em ${date}`)
});

async function qualquerPorra(){
    try {
        const user = await User.create({ name:"Italo", password: "123456", email:"italo@gmail.com"});
        console.log('User:' + user.name +' Created');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
};









