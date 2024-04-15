const {getAllDrivers, getDriverByName, getDriverDetail, newDriver}=require('../controllers/driverControllers')

const getDrivers = async (req, res)=>{
    try {
        const response = await getAllDrivers()
        res.status(200).json(response)  
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getByName = async (req, res)=>{
    const {name} = req.query
    try {
        const response = await getDriverByName(name)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getDetail = async (req, res)=>{
    const {id} = req.params
    const source = isNaN(id) ? "db" : "api"
     try {
        const response = await getDriverDetail(id, source)
        res.status(200).json(response)
     } catch (error) {
        res.status(400).json({error:error.message})
     }
}

const createDriver = async (req, res)=>{
    const {forename, surname, description, image, nationality, dob, teams} = req.body

    try {
        const response = await newDriver({forename, surname, description, image, nationality, dob, teams})
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports= {getDrivers, getByName, getDetail, createDriver}