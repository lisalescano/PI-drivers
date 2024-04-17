import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllDrivers } from "../../redux/actions"

import Cards from "../../components/cards/cards"
import SearchBar from "../../components/searchbar/searchbar"
import NavBar from "../../components/navbar/navbar"
import Paginated from "../../components/paginated/paginated"
import OrderBar from "../../components/orderbar/orderbar"


const Home = () => {
    const dispatch = useDispatch()
    const allDrivers = useSelector((state)=>state.allDrivers)

    useEffect(()=>{
        dispatch(getAllDrivers())
    },[dispatch])

    const [currentPage, setCurrentPage] = useState(1);
    const [driversPerPage] = useState(9);
    const indexOfLastDriver = currentPage * driversPerPage;
    const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
    const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);
    const pagination = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <NavBar/>
            <h1>DRIVERS</h1>
            <OrderBar/>
            <SearchBar/>
            {currentDrivers.length>0?<Cards allDrivers={currentDrivers}/>:<h2>Error en la pagina :(</h2>}
            <nav className="paginationhome"><Paginated  driversPerPage={driversPerPage} allDrivers={allDrivers.length} pagination={pagination}/> </nav>
        </div>
    )
}

export default Home