import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { filterDrivers, getAllDrivers, getByName, orderDrivers } from "../../redux/actions"

import Cards from "../../components/cards/cards"
import SearchBar from "../../components/searchbar/searchbar"
import NavBar from "../../components/navbar/navbar"
import Paginated from "../../components/paginated/paginated"
import OrderBar from "../../components/orderbar/orderbar"


const Home = () => {
    const dispatch = useDispatch()
    const allDrivers = useSelector((state)=>state.allDrivers)

    const ITEMS_PER_PAGE = 9
    
    

    useEffect(()=>{
        dispatch(getAllDrivers())
    },[dispatch])

    // useEffect(()=>{
    //     setCurrentPage(0)
    // },[allDrivers])
    
    // const [currentPage, setCurrentPage] = useState(0)
    // const [items, setItems] = useState([...allDrivers].splice(0, ITEMS_PER_PAGE))


    function handleNext(e){
        e.preventDefault()
        const tItems = allDrivers.length
        const nextPage = currentPage + 1
        const index = nextPage * ITEMS_PER_PAGE

        if(index>tItems) return

        setItems([...allDrivers].splice(index, ITEMS_PER_PAGE))
        setCurrentPage(nextPage)
        console.log(tItems);
    }
    
    function handlePrev(e){
        e.preventDefault()
        const prevPage = currentPage - 1

        if(prevPage<0) return

        const index = prevPage * ITEMS_PER_PAGE

        setItems([...allDrivers].splice(index, ITEMS_PER_PAGE))
        setCurrentPage(prevPage)
    }

    

    return (
        <div>
            <NavBar/>
            <h1>DRIVERS</h1>
            <OrderBar/>
            <SearchBar/>
            {/* <Paginated  currentPage={currentPage} handleNext={handleNext} handlePrev={handlePrev}/>  */}
            <Cards allDrivers={allDrivers}/>
        </div>
    )
}

export default Home