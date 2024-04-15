import "./landing.css"
import {Link} from "react-router-dom"

const Landing = ()=>{
    return(
        <div className="containerLP">
            <h1>Welcome to this SPA about drivers :)</h1>
            <Link to="/drivers">
                <button>Let's go!</button>
            </Link>
        </div>
    )
}

export default Landing