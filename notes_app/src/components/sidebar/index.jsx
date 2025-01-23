import { NavLink } from "react-router-dom"


export const Sidebar=()=>
{
    const styles=({isActive})=>
    {
        const active=" rounded-r-full flex align-center p-2 gap-1 "
        return isActive? `${active} bg-indigo-600 text-slate-100`:`hover:bg-indigo-600 
        hover:text-slate-100 ${active}`
    }
    return<aside className="flex flex-col gap-3 p-2 border-r-2 w-[150px] h-screen">
        <NavLink to="/" className={styles}>
        <span className="material-icons-outlined">home</span>
        <span> Home</span>
        </NavLink>
        <NavLink to="/important" className={styles}>

        <span className="material-icons-outlined">label_important</span>
        <span> Important </span>
        </NavLink>
        <NavLink to="/archive"className={styles}>
        <span className="material-icons-outlined">archive</span>
        <span> Archive</span>
        </NavLink>
        <NavLink to="/bin" className={styles}>
        <span className="material-icons-outlined">delete</span><span> Bin</span>
        </NavLink>


    </aside>
}