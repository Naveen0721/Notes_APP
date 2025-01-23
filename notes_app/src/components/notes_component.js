import { useNotes } from "../contexts/notes_context"
import Archive from "./archive"
const Notes=({id,title,text,ispinned})=>
{
    const {archive,deleted,important,notesdispatch}=useNotes()
    const pinclick=(id)=>
    {
        !ispinned && notesdispatch(
            {
                type:"PINNED",
                payload:{id}
            }
        )
        ispinned && notesdispatch(
            {
                type:"UNPINNED",
                payload:{id}
            }
        )   
    }
  const Archived=(id)=>
  {
    !isnotearchive ? notesdispatch(
        {
            type:"ARCHIVE",
            payload:{id}

        }
    ):notesdispatch(
        {
            type:"UNARCHIVE",
            payload:{id}
            

        }
        
    )
    

  }

  const findifnoteinarchive=(id,archive=[])=>
  {
    return archive.some(item=>item.id===id)

  }
  const findifnoteinbin=(id,deleted=[])=>
    {
      return deleted.some(item=>item.id===id)
  
    }
    const findifnoteinimportant=(id,important=[])=>
        {
          return important.some(item=>item.id===id)
      
        }

    
  const isnotedeleted=findifnoteinbin(id,deleted)
  const isnotearchive=findifnoteinarchive(id,archive)
  const isnoteimportant=findifnoteinbin(id,important)
  const delete_click=(id)=>
  {
    !isnotedeleted?notesdispatch(
        {
            type:"DELETE",
            payload:{id}
        }
    ):
    notesdispatch(
        {
            type:"DELETE_COMPLETELY",
            payload:{id}
        }
    )

  }
const delete_archive=(id=>
{
    if (!id) {
        console.error("Invalid ID for delete_archive");
        return;
    }
    
    if (isnotearchive) {
        notesdispatch({
            type: "DELETE_ARCHIVE",
            payload: { id },
        });
    }
    console.log("Archive item deleted with ID:", id);
  
}
)
const Restore=(id=>
{
    notesdispatch(
        {
            type:"RESTORE",
            payload:{id}
        }
    )
}
)
  const favourite=(id=>
  {
    !isnoteimportant?notesdispatch(
        {
            type:"IMPORTANT",
            payload:{id}
        }
    ):notesdispatch(
        {
            type:"Remove_IMPORTANT",
            payload:{id}

        }
    )
  }
  ) 
  const delete_important=()=>
    {
        notesdispatch(
            {
                type:"DELETE_IMPORTANT",
                payload:{id}
    
            }
        )

    } 
    const archive_important=()=>
        {
            notesdispatch(
                {
                    type:"ARCHIVE_IMPORTANT",
                    payload:{id}
        
                }
            )
    
        } 
        const favourite_archive=()=>
            {
                notesdispatch(
                    {
                        type:"FAVOURITE_IMPORTANT",
                        payload:{id}
            
                    }
                )
        
            } 
    return(
        <>
        <div id={id} className="flex flex-col flex-wrap p-3 border-2  border-neutral-400  bg-white w-[250px] rounded-md">
                    <div className="flex justify-between border-b-2 ">
                    <p className="mb-2">{title} </p>
                    {(!isnotearchive && !isnotedeleted && !isnoteimportant)?<button onClick={()=>pinclick(id)} title="pin notes">
                    <span className={ispinned ?"material-icons":"material-icons-outlined"} >push_pin</span>
                    </button> :<></>}
                    {
                                
                                  
                                
                                !isnotedeleted && !isnotearchive && isnoteimportant?<button> <span className= {isnoteimportant?"material-icons":"material-icons-outlined"} onClick={()=>favourite(id)}>grade</span></button>
                                :<> </>
                            }
                         
                    </div>
                    <div className="flex justify-between mt-3">
                    <span className="">{text}</span>
                    
                        <div>
                            {
                                isnotearchive?<button> <span className= {"material-icons-outlined"} onClick={()=>favourite_archive(id)}>grade</span></button>:<></>
                                
                            }
                        {
                                
                                  
                                
                                !isnotedeleted && !isnotearchive && !isnoteimportant?<button> <span className= {isnoteimportant?"material-icons":"material-icons-outlined"} onClick={()=>favourite(id)}>grade</span></button>
                                :<> </>
                            }
                            {
                                isnoteimportant?<button onClick={()=>archive_important(id)}><span className="material-icons-outlined " >archive</span></button>:<></>
                            }


                            {
                                
                                  
                                
                                !isnotedeleted && !isnoteimportant?<button> <span className= {isnotearchive?"material-icons":"material-icons-outlined"} onClick={()=>Archived(id)}>archive</span></button>
                                :<> </>
                            }
                            {
                                isnoteimportant?<button onClick={()=>delete_important(id)}><span className="material-icons-outlined " >delete</span></button>:<></>
                            }

                            {isnotearchive && !isnoteimportant?<button onClick={()=>delete_archive(id)} > <span className={isnotedeleted?"material-icons":"material-icons-outlined "} >delete</span></button>: !isnoteimportant && <button onClick={()=>delete_click(id)} > {isnotedeleted?<span className="material-icons">
delete_forever
</span>:<span className={isnotedeleted?"material-icons":"material-icons-outlined "}>delete</span>}</button>
                        }
                            
                            

                            {isnotedeleted? <button onClick={()=>Restore(id)}><span className="material-icons">
restore
</span></button>:<></>}
                       

                        </div>
                        
                       
                   

                    </div>
                     
                     
                </div>



            
          


        
                     
         
                
        
        </>
    )
}

export default Notes