import { Navbar } from "./Navbar"
import { Sidebar } from "./sidebar"
import { useNotes } from "../contexts/notes_context"
import Notes from "./notes_component"

const Archive=()=>
{
    const {archive}=useNotes()
    console.log(archive)
    return<div className=" h-screen overflow-hidden">
    <Navbar/>
  
    <main className="flex ">
    <Sidebar/>
    <div className="flex mt-4 overflow-y-auto max-h-[calc(100vh-100px)] gap-7 ml-5 flex-1 flex-wrap h-full ">
  
  { 
      archive.length>0 && archive.map(item=>
          <Notes key={item.id} id={item.id} title={item.title} text={item.text} ispinned={item.ispinned}/>
      )
  }
</div>
    
    </main>
    
  
    
    </div>
}

export default Archive;