let initialState = { allDrivers: [], copyDrivers: [], detail:[], allTeams: [] }

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DRIVERS":
            return {
                ...state,
                allDrivers: action.payload,
                copyDrivers: action.payload
            }
        case "GET_BY_NAME":
            return {
                ...state,
                allDrivers: action.payload
            }
        case "GET_DETAIL":
            return {
                ...state,
                detail: action.payload
            }
        case "GET_TEAMS":
            return {
                ...state,
                allTeams: action.payload
            }
        case "POST_DOG":
            return {
                ...state
            }
        default:
            return state
    }
}

export default rootReducer