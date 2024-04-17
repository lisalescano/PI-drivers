const cleanDriv = (arr) => {
    return arr.map((driver) => {
        return cleanDrivApi(driver)
    })
}

const cleanDrivApi = (obj) => {
    let newurl = ""
    if (obj.image.url == "") {
        newurl = "https://us.123rf.com/450wm/kritchanut/kritchanut1403/kritchanut140300126/26826363-silueta-del-hombre-an%C3%B3nimo-con-signo-de-interrogaci%C3%B3n.jpg"
    } else {
        newurl = obj.image.url
    }

    function arrTeams(data) {
        if(data.teams!=undefined){
            if (data.teams.includes(',')) {
                return data.teams = data.teams.split(',').map(team => team.trim());
            } else {
                return data.teams = [data.teams.trim()];
            }} else {
                return data.teams = []
            }
    }

    return {
        id: obj.id,
        forename: obj.name.forename,
        surname: obj.name.surname,
        description: obj.description,
        image: newurl,
        nationality: obj.nationality,
        dob: obj.dob,
        teams: arrTeams(obj)
    }
}

const cleansTeams = (arr) => {
    let arr1 = arr.map((driver) => {
        return driver.teams
    }).join().split(',')

    let arr2 = arr1.map((team) => team.trim()).filter((team, index, array) => {
        return array.indexOf(team) == index
    })

    return arr2.filter(team => team !== "")

}

const cleanDrivDB = (obj) => {
    const nteams = obj.Teams.map((team) => team.name)


    return {
        id: obj.id,
        forename: obj.forename,
        surname: obj.surname,
        description: obj.description,
        image: obj.image,
        nationality: obj.nationality,
        dob: obj.dob,
        teams: nteams
    }
}

const cleanAllDrivDB = (arr) => {
    return arr.map(obj => cleanDrivDB(obj))
}



module.exports = { cleanDriv, cleansTeams, cleanDrivApi, cleanDrivDB, cleanAllDrivDB }