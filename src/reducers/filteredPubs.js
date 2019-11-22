export default function filteredPubs(state, action) {
    switch (action.type) {
        case "FILTER_CAT":
            return {...state, filter: action.filter };
        default:
            return state
    }
}