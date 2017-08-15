export function createReducer(initialparams, reducerMap) {
    return (params = initialparams, action) => {
        const reducer = reducerMap[action.type]

        return reducer ? reducer(params, action.payload ? action.payload : {}, action.params) : params
    }
}