import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { CanvasGradit } from "./components/ui/grid";
import axios from "axios";
import { BACKEND_URL } from "./components/config";

interface DashboardProps {
  onClick: () => void;
}





export function Dashboard( prps:DashboardProps){
  const [contents, setContents] = useState<any[]>([]);

  useEffect(() => {
    const fetchcontents= async ()=>{
      const auth=localStorage.getItem("auth");
      const response = await axios.get(`${BACKEND_URL}contents`,{
        headers:{
          auth
        }
      })
      console.log(response.data.contents)
      setContents(response.data.contents)
    }
    fetchcontents()

  },[])
  


         return(<>
    <div className= ' flex grid justify-end '>
      <div className= ' flex '>

    <Button varient="primary" size="sm" onClick={prps.onClick} title='add contents'></Button>
    <Button varient="secondary" size="sm" onClick={()=>{}} title='share brain '></Button>
      </div>
    </div>
    {contents.map((items)=>(

    <CanvasGradit link={items.link} title={items.title}/>
    ))}
    </>
         )
}