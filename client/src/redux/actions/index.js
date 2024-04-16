import axios from "axios"

export function getAllDrivers(){
    return async function(dispatch){
        const res = (await axios.get('http://localhost:3001/drivers'))
        return dispatch({
            type: "GET_DRIVERS",
            payload: res.data
        })
    }
}

export function getByName(name){
    return async function(dispatch){
        const res = (await axios.get(`http://localhost:3001/drivers/name?name=${name}`))
        return dispatch({
            type: "GET_BY_NAME",
            payload: res.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        const res = (await axios.get(`http://localhost:3001/drivers/${id}`))
        return dispatch({
            type: "GET_DETAIL",
            payload: res.data
        })
    }
}

export function getTeams(){
    return async function(dispatch){
        const res = (await axios.get(`http://localhost:3001/teams`))
        return dispatch({
            type: "GET_TEAMS",
            payload: res.data
        })
    }
}

export function postDriver(payload){
    return async function(dispatch){
        const res = (await axios.post(`http://localhost:3001/drivers`, payload))
        return dispatch({
            type: "POST_DRIVER",
            payload: res
        })
    }
}

export function orderDrivers(orden){
    return ({
        type: "ORDER",
        payload: orden
    })
}


export function filterDrivers(filtro){
    return ({
        type: "FILTER",
        payload: filtro
    })
}

export function filterTeams(team){
    return ({
        type: "FILTER_TEAM",
        payload: team
    })
}
