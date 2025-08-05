import { NextFunction, Request, Response } from "express";
import { JWTSECRET } from "./config";
 import jwt from 'jsonwebtoken';

export const userAuth = (req:Request,res:Response,next:NextFunction)=>{
    const head = req.headers["auth"]


   if (typeof head !== "string") {
    return res.status(401).json({ message: "Token missing or malformed" });
  }

    const authorized = jwt.verify(head,JWTSECRET)

    if (authorized){
        //@ts-ignore
        req.id=authorized._id
        next()

    }



}