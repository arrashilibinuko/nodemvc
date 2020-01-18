exports.getusers = function(req,res){
    console.log("get users");

    res.json("GET USER");
};

exports.deleteusers = function(req,res){
    console.log("delete users");

    res.json("success")
};

exports.userlist = (req,res,next) =>{
    var mockupDataFromDB = [
        {name:"Arrashi",email:"arrashi@gmai.com"},
        {name:"nathan",email:"nathan@gmai.com"},
        {name:"khansa",email:"khansa@gmai.com"}
]
    res.render("users/list",{model: mockupDataFromDB});
}