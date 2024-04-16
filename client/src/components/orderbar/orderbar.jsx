import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTeams } from "../../redux/actions"


const OrderBar = ({handleOrder, handleFilter})=>{
    const dispatch = useDispatch()
    const allTeams = useSelector(state=>state.allTeams)

    useEffect(()=>{
        dispatch(getTeams())
    },[])

    return(
        <div>
            <select onChange={e=>handleOrder(e)}>
                <option value="default">Initial</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="dobDes">Date of birth (desc)</option>
                <option value="dobAsc">Date of birth (asc)</option>
            </select>

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
        </div>
    )
}

export default OrderBar