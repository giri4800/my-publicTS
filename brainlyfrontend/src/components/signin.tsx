import { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null) 
    const passwordRef = useRef<any>(null) 
      const handleClick = () => {

        
         if (usernameRef.current && passwordRef.current){
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;
    console.log(usernameRef.current.value,passwordRef.current.value)
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