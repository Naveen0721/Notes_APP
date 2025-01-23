import {v4 as uuid} from 'uuid';
import Archive from '../components/archive';

export const Notesreducer=(state,action)=>
{
    switch(action.type)
    {
        case 'TITLE':
            return {
                ...state,
                title:action.payload

            }
        case 'TEXT':
            return{
                ...state,
                text:action.payload
            }
        case 'ADD':
            return{
                ...state,
                
                   notes:[...state.notes,{title:state.title,text:state.text,id:uuid(),ispinned:false}],
                   title:"",
                   text:""
            }
            case "PINNED":
                return{
                    ...state,
                    notes:state.notes.map(item=>item.id===action.payload.id?{...item,ispinned:!item.ispinned}:item)
                }
                case "UNPINNED":
                return{
                    ...state,
                    notes:state.notes.map(item=>item.id===action.payload.id?{...item,ispinned:!item.ispinned}:item)
                }
            case "ARCHIVE":
                return{
                        ...state,
                        notes:state.notes.filter(item=>item.id!==action.payload.id),
                        archive:[...state.archive,state.notes.find(item=>item.id===action.payload.id)]
                    }
            case "UNARCHIVE":
                return{
                        ...state,
                        notes:[...state.notes,state.archive.find(item=>item.id===action.payload.id)],
                        archive:state.archive.filter(item=>item.id!==action.payload.id)
                    }
            case "DELETE":
                return{
                    ...state,
                    notes:state.notes.filter(item=>item.id!==action.payload.id),
                    deleted:[...state.deleted,state.notes.find(item=>item.id===action.payload.id)]

                }
                case "DELETE_ARCHIVE":
                    
                    return{
                        ...state,
                        archive:state.archive.filter(item=>item.id!==action.payload.id),
                        deleted:[...state.deleted,state.archive.find(item=>item.id===action.payload.id)]
                        
    
                    }
            case "DELETE_COMPLETELY":
                return{
                    ...state,
                    deleted:state.deleted.filter(item=>item.id!==action.payload.id)
                }

            // case "SET_NOTES":
            // return{
            //     ...state,
            //     notes:action.payload?.notes || [],
            //     archive:action.payload?.archive || [],
            //     deleted:action.payload?.deleted || [],
            //     important: action.payload?.important || [],
            // };
            case "SET_NOTES":
    return {
        ...state,
        notes: Array.isArray(action.payload?.notes) 
            ? action.payload.notes.filter(note => note && typeof note === "object") 
            : [],
        archive: Array.isArray(action.payload?.archive) 
            ? action.payload.archive.filter(note => note && typeof note === "object") 
            : [],
        deleted: Array.isArray(action.payload?.deleted) 
            ? action.payload.deleted.filter(note => note && typeof note === "object") 
            : [],
        important: Array.isArray(action.payload?.important) 
            ? action.payload.important.filter(note => note && typeof note === "object") 
            : [],
    };

            case "RESTORE":
              
                return{
                    ...state,
                    deleted:state.deleted.filter(item=>item.id!==action.payload.id),
                    notes:[...state.notes,state.deleted.find(item=>item.id===action.payload.id)]
                }
                case "IMPORTANT":
                    return{
                            ...state,
                            notes:state.notes.filter(item=>item.id!==action.payload.id),
                            important:[...state.important,state.notes.find(item=>item.id===action.payload.id)]
                        }
                        case "Remove_IMPORTANT":
                            console.log("11111111111")
                            return{
                                    ...state,
                                    notes:[...state.notes,state.important.find(item=>item.id===action.payload.id)],
                                    important:state.important.filter(item=>item.id!==action.payload.id)
                                }
                        case "DELETE_IMPORTANT":
                                    return{
                                        ...state,
                                       
                                        deleted:[...state.deleted,state.important.find(item=>item.id===action.payload.id)],
                                        important:state.important.filter(item=>item.id!==action.payload.id),
                                        
                    
                                    }
                        case "ARCHIVE_IMPORTANT":
                                        return{
                                            ...state,
                                           
                                            archive:[...state.archive,state.important.find(item=>item.id===action.payload.id)],
                                            important:state.important.filter(item=>item.id!==action.payload.id),
                                            
                        
                                        }
                                case "FAVOURITE_IMPORTANT":
                                            return{
                                                ...state,
                                               
                                                archive:state.archive.filter(item=>item.id!==action.payload.id),
                                                important:[...state.important,state.archive.find(item=>item.id===action.payload.id)]
                                                
                            
                                            }
            
            default:
                return state
    }


}