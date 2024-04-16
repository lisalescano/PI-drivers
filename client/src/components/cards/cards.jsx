import Card from "../card/card"
import "./cards.css"

const Cards = ({allDrivers})=>{
    const driverList=allDrivers

    return(
        <div className="card-list">
            {driverList.map(driver=><Card driver={driver}/>)}
        </div>
    )
}

export default Cards