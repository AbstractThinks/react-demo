export function posts(state = [], action) {
    switch (action.type) {
        case 'LOAD_POSTS_REQUEST':
            let text = action.text.trim()
            return [...state, text]
        case 'LOAD_POSTS_SUCCESS':
        case 'LOAD_POSTS_FAILURE':
        default:
            return state
    }
}

export function comments(state = [], action) {
    switch (action.type) {
        case 'LOAD_COMMENTS_REQUEST'
        let text = action.text.trim()
        return [...state, text]
        case 'LOAD_COMMENTS_SUCCESS'
        case 'LOAD_COMMENTS_FAILURE'
        default:
            return state
    }
}

export function comment(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT_REQUEST'
        let text = action.text.trim()
        return [...state, text]
        case 'ADD_COMMENT_SUCCESS'
        case 'ADD_COMMENT_FAILURE'
        default:
            return state
    }
}
