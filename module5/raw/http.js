let http = require("http");
// console.log(http);

//create a server

const app = http.createServer(function(req,res){
    res.write("Hello world");
    res.end();
})

app.listen(5000);