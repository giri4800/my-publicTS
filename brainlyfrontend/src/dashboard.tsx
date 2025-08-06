import { Button } from "./components/ui/button";
import { CanvasGradit } from "./components/ui/grid";

interface DashboardProps {
  onClick: () => void;
}

export function Dashboard( prps:DashboardProps){
         return(<>
    <div className= ' flex grid justify-end '>
      <div className= ' flex '>

    <Button varient="primary" size="sm" onClick={prps.onClick} title='add contents'></Button>
    <Button varient="secondary" size="sm" onClick={()=>{}} title='share brain '></Button>
      </div>
    </div>
    <CanvasGradit link='https://www.youtube.com/watch?v=dDMXyQ6cwIc' title='youtube  vid'/>
    </>
         )
}