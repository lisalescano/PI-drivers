const axios = require('axios')
const { Driver, Teams } = require('../db')
const { Op } = require('sequelize')
const { cleanDriv, cleanDrivApi, cleanDrivDB, cleanAllDrivDB } = require('../utils/index')

const getAllDrivers = async () => {
    const infoDB = await Driver.findAll({
        include: {
            model: Teams,
            attributes: ["name", "id"],
            through: {
                attributes: []
            }
        }
    })

    const driverDB = cleanAllDrivDB(infoDB)

    const infoApi = (await axios.get("http://localhost:5000/drivers")).data

    const driverApi = cleanDriv(infoApi)

    return [...driverDB, ...driverApi]
}

const getDriverByName = async (name) => {
    const infoDB = await Driver.findAll({
        where: { forename: { [Op.iLike]: `%${name}%` } },

        include: {
            model: Teams,
            attributes: ["name", "id"],
            through: {
                attributes: []
            }
        }

    })

    const infoApi = (await axios.get("http://localhost:5000/drivers")).data.filter((driver) => driver.driverRef.toLowerCase().includes(name.toLowerCase()))

    const driverApi = cleanDriv(infoApi)

    const driverDB = cleanAllDrivDB(infoDB)

    const response = [...driverDB, ...driverApi]

    if (!response.length) throw Error(`El conductor ${name} no pudo ser encontrado`)
    else return response
}


const getDriverDetail = async (id, source) => {
    if (source == "api") {
        const infoApi = (await axios.get(`http://localhost:5000/drivers/${id}`)).data

        const driverApi = cleanDrivApi(infoApi)

        return driverApi
    } else {
        const infoDB = await Driver.findByPk(id, {
            include: {
                model: Teams,
                attributes: ["name", "id"],
                through: {
                    attributes: []
                }
            }
        })

        return cleanDrivDB(infoDB)
    }
}

const newDriver = async ({ forename, surname, description, image, nationality, dob, teams }) => {


    if (image == "") {
        image = "https://us.123rf.com/450wm/kritchanut/kritchanut1403/kritchanut140300126/26826363-silueta-del-hombre-an%C3%B3nimo-con-signo-de-interrogaci%C3%B3n.jpg"
    }
    const driverCreated = await Driver.create({ forename, surname, description, image, nationality, dob })

    driverCreated.addTeams(teams)
    return driverCreated
}

module.exports = {
    getAllDrivers, getDriverByName, getDriverDetail, newDriver
}