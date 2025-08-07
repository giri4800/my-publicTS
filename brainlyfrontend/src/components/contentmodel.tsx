import axios from "axios";
import { Button } from "./ui/button";
import { CrossIcon } from "./ui/crossicon";
import { Input } from "./ui/input";
import { useRef } from "react";
import { BACKEND_URL } from "./config";

interface ContextModelProps {
  open: boolean;
  onClose: () => void;
}

export function ContextModel({ open, onClose }: ContextModelProps) {
  const titleref = useRef<HTMLInputElement>(null) 
  const linktef = useRef<HTMLInputElement>(null) 
  const typeref = useRef<HTMLInputElement>(null) 
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-60" onClick={onClose}></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-xl w-[24rem] p-6 z-10">
        {/* Close button */}
        <div className="absolute top-3 right-3 cursor-pointer" onClick={onClose}>
          <CrossIcon />
        </div>

        {/* Form content */}
        <div className="flex flex-col space-y-4 mt-6 ">
          <Input reference={titleref} placeholder="Title" />
          <Input reference={linktef} placeholder="Link" />
          <Input reference={typeref} placeholder="Type" />
          <Button varient="primary" title="submit" onClick={async()=>{
            console.log( localStorage.getItem("auth"),titleref.current?.value,
               linktef.current?.value,
              typeref.current?.value,)
           await axios.post(`${BACKEND_URL}contents`, {
              "auth": localStorage.getItem("auth"),
              "title": titleref.current?.value,
              "link": linktef.current?.value,
              "type": typeref.current?.value,
            },{
              headers:{
                auth: localStorage.getItem("auth")
              }
            }
          
          
          
          )



          }}/>
        </div>
      </div>
    </div>
  );
}
