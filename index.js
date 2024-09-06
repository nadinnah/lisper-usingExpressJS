
import express from "express";
import axios from "axios";

var app= express();
var port = 3000;
app.use(express.static("public"));


app.get("/", async (req, res) => {
    try{
        var result= await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", { secret: result.data.secret, user:result.data.username});
        }catch(error){
            console.log(error.response.data);
            res.sendStatus(500);
        }
});
// app.get("/user-secret",async (req,res)=>{
//     try{
//     var result= await axios.get("https://secrets-api.appbrewery.com/secrets/"+randomId,{})
//     res.render("index.ejs", { secret: result.data.secret, user:result.data.username});
//     }catch(error){
//         console.log(error.response.data);
//         res.sendStatus(500);
//     }
// });

app.listen(port, function(){
    console.log("Server is running on port " + port);
    });