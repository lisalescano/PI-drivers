import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllDrivers, getDetail } from "../../redux/actions"
import { useEffect } from "react"
import NavBar from "../../components/navbar/navbar"
import style from "./detail.module.css"



const Detail = () => {

    const { id } = useParams()

    const driver = useSelector((state) => state.detail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [id])


    return (

        <div>
            <NavBar />
            <div className={style.detail}>
                <h2>Driver ID: {id}</h2>
                <h1>{driver.forename} {driver.surname}</h1>
                <p>{driver.nationality}</p>
                <img src={driver.image} alt='no hay imagen' width='200px' />
                <p>Date of birth: {driver.dob} <span>(yyyy/mm/dd)</span></p>
                <p>{driver.description}</p>
                <p>Teams: {driver.teams?.join(', ')}</p>
            </div>
        </div>
    )
}

export default Detail