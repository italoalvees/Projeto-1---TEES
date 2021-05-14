let {users} = require('./../data/database.js');
let date, timeElapsed;

exports.signIn = (req,res) => {
    timeElapsed = Date.now();
    date = new Date(timeElapsed).toUTCString()
    const {email,password} = req.body;

    finded = users.find((item) => { return (item.email == email && item.password == password) })
    
    if(finded){
        console.log(`usuário: ${email} Logged ${date}`)
    }else{
        console.log(`usuário: ${email} Not Found ${date}`)
    };

    if(finded){
        res.status(200).send('Usuário autenticado com sucesso!')
    }else{
        res.status(400).send('Erro ao autenticar-se! Verifique email e senha.')
    };
    
}