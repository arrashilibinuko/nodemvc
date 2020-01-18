// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
//   });



exports.index = function(req,res,next){
    console.log("hello1");

    res.render('index',({title:"express demo"}))
    // res.send("friend login")
    // res.end()
}