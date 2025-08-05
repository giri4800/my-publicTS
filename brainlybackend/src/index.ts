import  express, { request }  from "express";
import { Contentsmodel, LinksModel, UserModel } from "./db";
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
    const type = req.body.type
    const title = req.body.title
    const link = req.body.link
    await Contentsmodel.create({
        title,
        link,
        userid:id,
        type
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


app.post("/contents/link", userAuth,async(req ,res)=>{
    //@ts-ignore
    const userid = req.id;
    const share = req.body.share;
    const hash = Math.random()

    if (share){
        await LinksModel.create({
            hash,
            userid
            })
        res.json({
                message:"done",
                hash,
                share
            })
    }else{
        await LinksModel.deleteOne({
             
            userid,
            

        })
        res.json({
                message:"broke",
              
            })
    }

}
)

app.get("/contents/:share",async (req,res)=>{
    const share=req.params.share;
    const existinghash=await LinksModel.findOne({hash:share})
    console.log(existinghash);
    if(!existinghash)
        {
            console.log("returned");
    return
    }else{
        const contents = await Contentsmodel.find({userid:existinghash.userid})
        console.log(contents);
        res.json({
            contents

        })
    }

})


app.listen(3000);