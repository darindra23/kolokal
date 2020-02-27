
class Controller{
    static home(req,res){
        res.render('home')
    }
    static signup(req,res){
        res.render('register')
    }
}

module.exports = Controller