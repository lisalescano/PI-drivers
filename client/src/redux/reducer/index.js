let initialState = { allDrivers: [], copyDrivers: [], driversFiltered:[], detail: [], allTeams: [] }

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
        case "ORDER":
            if (action.payload == "A-Z") return {
                ...state,
                allDrivers: [...state.allDrivers].sort((a, b) => a.forename.localeCompare(b.forename))
            }
            if (action.payload == "Z-A") return {
                ...state,
                allDrivers: [...state.allDrivers].sort((a, b) => b.forename.localeCompare(a.forename))
            }
            if (action.payload == "dobDes") return {
                ...state,
                allDrivers: [...state.allDrivers].sort((a, b) => b.dob.localeCompare(a.dob))
            }
            if (action.payload == "dobAsc") return {
                ...state,
                allDrivers: [...state.allDrivers].sort((a, b) => a.dob.localeCompare(b.dob))
            }
        case "FILTER":
            if (action.payload == "all") return {
                ...state,
                allDrivers: state.copyDrivers,
                driversFiltered: state.copyDrivers
            }
            if (action.payload == "api") {

                state.allDrivers = state.copyDrivers

                return {
                    ...state,
                    allDrivers: [...state.allDrivers].filter(driv => typeof driv.id === "number"),
                    driversFiltered: [...state.allDrivers].filter(driv => typeof driv.id === "number")
                }
            }
            if (action.payload == "created") {
                
                state.allDrivers=state.copyDrivers

                return {
                ...state,
                allDrivers: [...state.allDrivers].filter(driv => typeof driv.id !== "number"),
                driversFiltered: [...state.allDrivers].filter(driv => typeof driv.id !== "number")
            }}
        case "FILTER_TEAM":
            if (action.payload=="allteams"){
                return{
                    ...state,
                    allDrivers: state.copyDrivers,
                }
            } else {
                    return{
                    ...state,
                    allDrivers: [...state.driversFiltered].filter(data => data.teams.includes(action.payload))
                }
            }
        default:
            return state
    }
}

export default rootReducer