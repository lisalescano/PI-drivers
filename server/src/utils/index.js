const cleanDriv = (arr) => {
    return arr.map((driver) => {
        let newurl=""
        if(driver.image.url==""){
            newurl="https://us.123rf.com/450wm/kritchanut/kritchanut1403/kritchanut140300126/26826363-silueta-del-hombre-an%C3%B3nimo-con-signo-de-interrogaci%C3%B3n.jpg"
        } else {
            newurl=driver.image.url
        }
        return {
            id: driver.id,
            forename: driver.name.forename,
            surname: driver.name.surname,
            description: driver.description,
            image: newurl,
            nationality: driver.nationality,
            dob: driver.dob,
            teams: driver.teams
        }
    })
}

const cleanDrivApi = (obj) => {
    let newurl=""
        if(obj.image.url==""){
            newurl="https://us.123rf.com/450wm/kritchanut/kritchanut1403/kritchanut140300126/26826363-silueta-del-hombre-an%C3%B3nimo-con-signo-de-interrogaci%C3%B3n.jpg"
        } else {
            newurl=obj.image.url
        }
    return {
        id: obj.id,
        forename: obj.name.forename,
        surname: obj.name.surname,
        description: obj.description,
        image: newurl,
        nationality: obj.nationality,
        dob: obj.dob,
        teams: obj.teams
    }
}

const cleansTeams = (arr) => {
    let arr1 = arr.map((driver) => {
        return driver.teams
    }).join().split(',')

    let arr2= arr1.map((team) => team.trim()).filter((team, index, array) => {
        return array.indexOf(team) == index
    })

    return arr2.filter(team=>team!=="")

}

const cleanDrivDB = (obj)=>{
    const nteams = obj.Teams.map((team)=>team.name)

    const response = nteams.join(', ')

    return {
        id: obj.id,
        forename: obj.forename,
        surname: obj.surname,
        description: obj.description,
        image: obj.image,
        nationality: obj.nationality,
        dob: obj.dob,
        teams: response
    }
}

const cleanAllDrivDB =(arr)=>{
    return arr.map(obj=>cleanDrivDB(obj))
}



module.exports = { cleanDriv, cleansTeams, cleanDrivApi, cleanDrivDB, cleanAllDrivDB }