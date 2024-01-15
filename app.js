const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.set("view engine","ejs");
var items=[];
var workitems=[];

app.get("/",function(req,res){
    // var today=new Date();
    // var options={
    //     weekday:"long",
    //     day:"numeric",
    //     month:"long"
    // };
    // var day=today.toLocaleDateString("en-US",options);
    let day=date(); 
    res.render("list",
    {
        listTitle:day,
        newListItem:items
    }
    );
});
app.post("/",function(req,res){
    
    var item=req.body.newItem;
    if(req.body.list==="work list"){
        workitems.push(item);
        res.redirect("/work");

    }
    else{
    items.push(item);
    res.redirect("/");
    }
});
app.get("/work",function(req,res){
    res.render("list",{
        listTitle:"work list",
        newListItem:workitems
    });
});

app.listen(3000);
