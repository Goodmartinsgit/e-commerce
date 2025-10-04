import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className=" flex justify-between items-center py-4 px-8 w-full">
            <div className="h-[5rem] w-[5rem] bg-black text-2xl text-white rounded-full flex justify-center items-center p-2">
                <NavLink to={"/"}>Logo</NavLink>                
            </div>
            <div className="flex justify-center items-center gap-16 pr-20 text-xl font-semibold">
            <NavLink to={"/"} className="link">Home</NavLink>           
            <NavLink to={"/about"} className="link">About</NavLink>            
            <NavLink to={"/contact"} className="link">Contact</NavLink>
            </div>
            
        </div>
     );
}
 
export default Navbar;