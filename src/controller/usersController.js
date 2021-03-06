let {users, id} = require('./../data/database.js');

exports.listUsers = (req, res) =>{
    res.send(users)
}

exports.listUser = (req, res) => {

    let user = users.find((item) => {
        return item.id == req.params.id;
        
    });


    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send("Not Found")
    }
};

exports.createUser = (req,res) => {
    const {name, email, password} = req.body;
    
    const user = { 
        id: id,
        name: name,
        email: email,
        password: password,

    }
    console.log(user)
    users.push(user)
    id += 1;
    res.status(200).send(user);
};

exports.updateUser = (req, res) => {
    
    if(users.find((item) => item.id == req.params.id)){
        users = users.map((item) => {
            if(item.id == req.params.id){
                return {
                    ...item,
                    ...req.body
                }
            }
            return item;
        });
        

        res.status(200).send(users.find((item) => item.id == req.params.id))
    
}else{
        res.send(404).send('Not Found!') 
    }
;}

exports.deleteUser = (req, res) => {

    if(users.find((item) => item.id == req.params.id)){
        users = users.filter((item) => {
            return item.id != req.params.id;
        });
        res.send(204)
    }else{
        res.send(404).send('Not Found!')
    }
};


