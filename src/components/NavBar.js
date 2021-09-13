import React, {useState, useEffect} from 'react'
import "../app.css"
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';



function NavBar(){
    const[showLinks, setShowLinks] = useState(false);
    return(
        <div className="Navbar">
        <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
            <h1 className="heading">NEW YORK TIMES MOST POPULAR</h1>
        </div>
        <button onClick={()=>setShowLinks(!showLinks)}>
            {""}
            <ReorderIcon/>
            </button>
        
        </div>
        <div className="rightside">
        <button><SearchIcon/></button>
        
               
        </div>
        </div>
    )
}

export default NavBar