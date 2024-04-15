import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTeams, postDriver } from "../../redux/actions"
import NavBar from "../../components/navbar/navbar"



const Create = () => {

    const dispatch = useDispatch()
    const allTeams = useSelector(state => state.allTeams)
    const regeximg = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i
    const regexdate = /^\d{4}-\d{2}-\d{2}$/


    const [driver, setDriver] = useState({
        forename: "",
        surname: "",
        description: "",
        image: "",
        nationality: "",
        dob: "",
        teams: []
    })

    const [error, setError] = useState({
        forename: "Please enter a name to your driver",
        
    })
    
    function validate(input) {
        let msg = {}
        if (!input.forename) { msg.forename = 'Please enter a name to your driver' }
        if (!input.surname) { msg.surname = 'Please enter a surname to your driver' }
        if (!input.nationality) { msg.nationality = 'Please enter a nationality to your driver' }
        if (!regeximg.test(input.image) && input.image !== "") { msg.image = 'Please enter a valid image url' }
        if (!input.dob) { msg.dob = 'Please enter a date of birth to your driver' }
        else if (!regexdate.test(input.dob)) { msg.dob = 'Please enter a valid date on YYYY-MM-DD format' }
        if (!input.description) { msg.description = 'Please enter a description to your driver' }
        return msg
    }

    function handleChange(e) {
        e.preventDefault()
        setDriver({
            ...driver,
            [e.target.name]: e.target.value
        })

        setError(validate({
            ...driver,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e) {
        e.preventDefault()
        if (!driver.teams.includes(e.target.value)) {
            setDriver({
                ...driver,
                teams: [...driver.teams, e.target.value]
            })
        }
    }

    function handeDelete(team) {
        setDriver({
            ...driver,
            teams: driver.teams.filter(t => t !== team)
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!error.forename && !error.surname && !error.nationality&& !error.image && !error.dob && !error.description) {
            dispatch(postDriver(driver))
            alert('Driver has been created successfully!')
            setDriver({
                forename: "",
                surname: "",
                description: "",
                image: "",
                nationality: "",
                dob: "",
                teams: []
            })
        } else {
            return alert('Complete the form to create your driver')
        }
    }

    useEffect(() => {
        dispatch(getTeams())

    }, [dispatch])

    console.log(driver)

    return (
        <div>
            <NavBar/>
            <div>
                <label>Forename </label>
                <input type="text" name="forename" value={driver.forename} onChange={e => handleChange(e)} />
                <span>{error.forename}</span>
            </div>
            <div>
                <label>Surname </label>
                <input type="text" name="surname" value={driver.surname} onChange={e => handleChange(e)} />
                <span>{error.surname}</span>
            </div>
            <div>
                <label>Nactionality </label>
                <input type="text" name="nationality" value={driver.nationality} onChange={e => handleChange(e)} />
                <span>{error.nationality}</span>
            </div>
            <div>
                <label>Image (url) </label>
                <input type="text" name="image" value={driver.image} onChange={e => handleChange(e)} />
                <span>{error.image}</span>
            </div>
            <div>
                <label>Date of birth </label>
                <input type="date" name="dob" value={driver.dob} onChange={e => handleChange(e)} />
                <span>{error.dob}</span>
            </div>
            <div>
                <label>Description </label>
                <input type="text" name="description" value={driver.description} onChange={e => handleChange(e)} />
                <span>{error.description}</span>
            </div>
            <div>
                <label>Teams </label>
                <select onChange={e => handleSelect(e)}>
                    {allTeams.sort(function (a, b) {
                        if (a < b) return -1
                        if (a > b) return 1
                        return 0
                    }).map(team => <option value={team}>{team}</option>)}

                </select>
                <ul>
                    {driver.teams.map(team => <li>{team} <button onClick={() => handeDelete(team)}>X</button> </li>)}
                </ul>
            </div>
            <button onClick={handleSubmit}>Create</button>
        </div>
    )
}

export default Create