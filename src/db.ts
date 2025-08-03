import {model, Schema } from 'mongoose';
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://admin:wPbJ5yguOgiJCzh8@cluster0.ttdceue.mongodb.net/brainly")
const  UserSchema = new Schema({
    username : {type:String,unique:true},
    password : String 
})

export const UserModel = model ("User",UserSchema);


const ContentsSchema = new Schema({
    title:String,
    link:String,
    userid:{type:mongoose.Types.ObjectId, ref:"User"}
})

export const Contentsmodel = model ("contents",ContentsSchema);