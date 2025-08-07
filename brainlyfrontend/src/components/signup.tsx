import { useRef } from "react";
import { Input } from "./ui/input";
import { BACKEND_URL } from "../components/config";
import { Button } from "./ui/button";
import {  useNavigate } from "react-router-dom";

import axios from "axios";


export function Signup(){
    const usernameRef = useRef<HTMLInputElement>(null) 
    const passwordRef = useRef<any>(null) 
    const navigate= useNavigate();
      const  handleClick = async () => {

        
         if (usernameRef.current && passwordRef.current){
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;
            await axios.post(`${BACKEND_URL}signup`,{
              username,
              password
            })
            alert("you are signed up")
            navigate("/signin")

  }};
    
return (
  <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-sm flex flex-col space-y-6 items-center">
      <h2 className="text-3xl font-bold text-gray-800">Signup</h2>

      <Input reference={usernameRef} placeholder="Username" />
      <Input reference={passwordRef} placeholder="Password" />

      <Button
        varient="primary"
        onClick={handleClick}
        title="signup"
      />
    </div>
  </div>
);


    
}