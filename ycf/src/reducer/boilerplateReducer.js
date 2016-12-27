
export function boilerplateReducer1(state = {}, action) {
    switch (action.type) {
        case 'LOAD_boilerplateReducer1_REQUEST':
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case 'LOAD_boilerplateReducer1_SUCCESS':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case 'LOAD_boilerplateReducer1_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

export function boilerplateReducer2(state = {}, action) {
    switch (action.type) {
        case 'LOAD_boilerplateReducer2_REQUEST':
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case 'LOAD_boilerplateReducer2_SUCCESS':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case 'LOAD_boilerplateReducer2_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}
