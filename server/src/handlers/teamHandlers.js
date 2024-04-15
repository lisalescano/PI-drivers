const {getAllTeams} = require('../controllers/teamsConrollers')
const getTeams = async (req, res)=>{
    try {
        const response = await getAllTeams()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
} 

module.exports={getTeams}