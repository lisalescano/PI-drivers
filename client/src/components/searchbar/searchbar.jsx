import { getByName, getAllDrivers } from "../../redux/actions"
import { useState } from "react"
import { useDispatch } from "react-redux"

const SearchBar = () => {

    const [searchString, setSearchString] = useState("")
    const dispatch=useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        setSearchString(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getByName(searchString))
    }

    const handleClear = (e) => {
        // e.preventDefault()
        dispatch(getAllDrivers())
        setSearchString("")
    }

    return (



        <div>
            <form>
                <input type="text" onChange={e => handleChange(e)} />
                <button onClick={handleSubmit}>Buscar</button><span><button type="reset" onClick={handleClear}>X</button></span>
            </form>
        </div>
    )
}

export default SearchBar