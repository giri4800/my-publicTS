import { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { BACKEND_URL } from "./config";
import {  useNavigate } from "react-router-dom";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null) 
    const passwordRef = useRef<any>(null)
    const navigate= useNavigate(); 
      const handleClick = async() => {

        
         if (usernameRef.current && passwordRef.current){
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;
          const responce =await axios.post(`${BACKEND_URL}signin`,{
            username,
            password
          })

          const token =responce.data.signintoken
          localStorage.setItem("auth",token);
          alert("you have signed in ")
          localStorage.setItem("auth",token);
          navigate("/dashboard")
          
  }};
    
return (
  <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-sm flex flex-col space-y-6 items-center">
      <h2 className="text-3xl font-bold text-gray-800">Signin</h2>

      <Input reference={usernameRef} placeholder="Username" />
      <Input reference={passwordRef} placeholder="Password" />

      <Button
        varient="primary"
        onClick={handleClick}
        title="signin"
      />
    </div>
  </div>
);


    
}