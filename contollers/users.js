exports.getusers = function(req,res){
    console.log("get users");

    res.json("GET USER");
};

exports.deleteusers = function(req,res){
    console.log("delete users");

    res.json("success")
}