import logo from "../../assets/notes1.png"
export const Navbar=()=>
{
    return(
       
        <header className="flex items-center  border-b-gray-100 border-b-2 ">
        <img className="w-20 h-20 bg-fafafa p-3" src={logo} alt="logo"/>
       
        <h1 className="text-2xl font-bold text-indigo-800">Notes it</h1>
        

        </header>
    )
}