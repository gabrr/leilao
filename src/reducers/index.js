import { combineReducers } from 'redux'
import addingFuncs from "./addingFuncs"
import filteredPubs from "./addingFuncs"

export default combineReducers({
    addingFuncs,
    filteredPubs
})