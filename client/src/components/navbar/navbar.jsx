import { Link } from "react-router-dom"

const NavBar = ()=>{
    return(
        <div>
            <Link to="/drivers"><button>Home</button> </Link>
            <Link to="/create"><button>Create</button></Link>
        </div>
    )
}

export default NavBar