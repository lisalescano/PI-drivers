import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllDrivers, getByName } from "../../redux/actions"

import Cards from "../../components/cards/cards"
import SearchBar from "../../components/searchbar/searchbar"
import NavBar from "../../components/navbar/navbar"


const Home = () => {
    const dispatch = useDispatch()
    const allDrivers = useSelector((state)=>state.allDrivers)

    useEffect(()=>{
        dispatch(getAllDrivers())
    },[dispatch])

    const [searchString, setSearchString] = useState("")

    function handleChange(e){
        e.preventDefault()
        setSearchString(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByName(searchString))
    }

    return (
        <div>
            <NavBar/>
            <h1>DRIVERS</h1>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Cards allDrivers={allDrivers}/>
        </div>
    )
}

export default Home