import { useContext,createContext,useReducer } from "react";
import { Notesreducer } from "../reducers/notesreducer";
import { useEffect } from "react";

const NotesContext=createContext();

//provider

const NotesProvider=({children})=>
{
    const initialstate={
        text:"",
        title:"",
        notes:[],
        archive:[],
        deleted:[],
        important:[]
    
    }

    const [{text,title,notes,archive,deleted,important},notesdispatch]=useReducer(Notesreducer,initialstate)
    useEffect(()=>
        {
            const storedData=localStorage.getItem("notesAppData")
            const parsedData = storedData ? JSON.parse(storedData) : { notes: [], archive: [],deleted:[],important:[] };
           
                // console.log("Loading from localStorage:", JSON.parse(storedData));
                notesdispatch(
                    {
                        type:"SET_NOTES",
                        payload:parsedData,
                    }
                );
            
            
        },[notesdispatch])
    
        useEffect(()=>
        {
            const notesAppData=
            {
                notes:notes,
                archive:archive,
                deleted:deleted,
                important:important
    
            }
            if (notes.length > 0 || archive.length > 0 || deleted.length>0 || important.length>0) {
            // console.log("Saving to localStorage:", notesAppData); // Debugging
          
                localStorage.setItem("notesAppData",JSON.stringify(notesAppData))
    
            }
           
            
        },[notes,archive,deleted,important])

    return(
        <NotesContext.Provider value={{text,title,notes,archive,deleted,important,notesdispatch}}>
    {children}

    </NotesContext.Provider>

    )

    

}

// consumer

const useNotes=()=>useContext(NotesContext);

export {NotesProvider,useNotes}