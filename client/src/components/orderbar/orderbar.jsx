import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTeams } from "../../redux/actions"
import { orderDrivers, filterDrivers } from "../../redux/actions"


const OrderBar = ()=>{
    const dispatch = useDispatch()
    const allTeams = useSelector(state=>state.allTeams)
    const allDrivers = useSelector(state=>state.allDrivers)

    useEffect(()=>{
        dispatch(getTeams())
    },[])

    function handleOrder(e){
        e.preventDefault()
        dispatch(orderDrivers(e.target.value))
    }

    function handleFilter(e){
        e.preventDefault()
        dispatch(filterDrivers(e.target.value))
    }

    return(
        <div>
            <select onChange={e=>handleFilter(e)}>
                <option value="all">All drivers</option>
                <option value="api">Drivers from api</option>
                <option value="created">Drivers created</option>
            </select>

            <select onChange={e => handleFilter(e)}>
                    <option value="allteams">All teams</option>
                    {allTeams.sort(function (a, b) {
                        if (a < b) return -1
                        if (a > b) return 1
                        return 0
                    }).map(team => <option value={team}>{team}</option>)}
            </select>

            <select onChange={e=>handleOrder(e)}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="dobDes">Date of birth (desc)</option>
                <option value="dobAsc">Date of birth (asc)</option>
            </select>
        </div>
    )
}

export default OrderBar