interface Cardtype{
    title?:string,
    link?:string,
    type?:"twitter"|"youtube"

}




export function CanvasGradit(prps:Cardtype){
     return(
        <div>
            <div className="border shadow p-4 m-2 w-72 h-62 text-center">
                {prps.title}
                <>
                <iframe
  
  
  src={prps.link?.replace("watch","embed").replace("?v=","/")}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="w-62"
></iframe>

                </>

            </div>
            
        </div>
     )


}