import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/sidebar";
import { useNotes } from "./contexts/notes_context";
import Notes from "./components/notes_component";

const Important=()=>
{
    const {important}=useNotes();
    console.log("hel")
    console.log(important)
    return(<div className=" h-screen overflow-hidden">
    <Navbar/>
  
    <main className="flex ">
        <Sidebar/>
 

        <div className="flex mt-4 overflow-y-auto max-h-[calc(100vh-100px)] gap-7 ml-5 flex-1 flex-wrap h-full ">
  
  { 
      important.length>0 && important.map(item=>
          <Notes key={item.id} id={item.id} title={item.title} text={item.text} ispinned={item.ispinned}/>
      )
  }
</div>
        </main>
       
        
        </div>
    )
}
export default Important;