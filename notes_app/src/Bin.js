
import { Sidebar } from "./components/sidebar";
import { Navbar } from "./components/Navbar";
import { useNotes } from "./contexts/notes_context";
import Notes from "./components/notes_component";
const Bin=()=>
{
    const {deleted}=useNotes()
    return(
        <div>
            <Navbar/>
            <div className="flex">
            <Sidebar/>
            <div className="flex mt-4 overflow-y-auto max-h-[calc(100vh-100px)] gap-7 ml-5 flex-1 flex-wrap h-full">
                {
                    deleted.length>0 && deleted.map(item=>
                        <Notes key={item.id } id={item.id} title={item.title} text={item.text} ispinned={item.ispinned}/>
                    
                    )
                }
            </div>

            </div>
           
        </div>
    )

}

export default Bin;