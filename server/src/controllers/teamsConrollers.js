const axios = require('axios')
const { Teams } = require('../db')
const { cleansTeams } = require('../utils')


const getAllTeams = async () => {
    const infoApi = (await axios.get("http://localhost:5000/drivers")).data
    const teamsApi = cleansTeams(infoApi)

    teamsApi.forEach((team) => Teams.findOrCreate({ where: { name: team } }))

    return teamsApi
}


module.exports = { getAllTeams }