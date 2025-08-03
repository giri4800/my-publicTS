import  express  from "express";
import { Contentsmodel, UserModel } from "./db";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { JsonWebTokenError } from "jsonwebtoken";
import { JWTSECRET } from "./config";
import { userAuth } from "./middlewate";

mongoose.connect("mongodb+srv://admin:wPbJ5yguOgiJCzh8@cluster0.ttdceue.mongodb.net/brainly")
console.log("mongo connected")

const app = express();
app.use(express.json())

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    await UserModel.create({
        username,
        password
    })

    res.json({
        message:"signed up"
    })
})

app.post("/signin",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const  userfound = await UserModel.findOne({
        username,
        password
    })

    if (!userfound){
        res.json({
            message:"wrong passoword"
        })
    }else{
        const signintoken = jwt.sign({_id:userfound._id},JWTSECRET)
        res.json({
            signintoken
        })
    }

})

app.post("/contents", userAuth , async (req,res)=>{
    //@ts-ignore
    const id = req.id;
    const title = req.body.title
    const link = req.body.link
    await Contentsmodel.create({
        title,
        link,
        userid:id
    })
    res.json({
        Message:"done "
    })
})


app.get("/contents",userAuth, async(req ,res)=>{
    //@ts-ignore
    const id = req.id;
    const contents = await Contentsmodel.find({
        userid:id
    }).populate("userid","username")
    res.json({
        contents
    })

}
)
app.listen(3000);