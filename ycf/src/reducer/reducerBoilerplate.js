 export function posts(state = [], action) {
    switch (action.type) {
        case 'LOAD_POSTS_REQUEST':
            // let text = action.text.trim()
            // return [...state, text]
            return 1
        case 'LOAD_POSTS_SUCCESS':
            // let text = action.text.trim()
            // return [...state, text]
            return 2
        case 'LOAD_POSTS_FAILURE':
            // let text = action.text.trim()
            // return [...state, text]
            return 3
        default:
            return state
    }
}

 export function comments(state = [], action) {
    switch (action.type) {
        case 'LOAD_COMMENTS_REQUEST':
            let text = action.text.trim()
            return [...state, text]
        case 'LOAD_COMMENTS_SUCCESS':
            let text = action.text.trim()
            return [...state, text]
        case 'LOAD_COMMENTS_FAILURE':
            let text = action.text.trim()
            return [...state, text]
        default:
            return state
    }
}

 export function comment(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT_REQUEST':
            let text = action.text.trim()
            return [...state, text]
        case 'ADD_COMMENT_SUCCESS':
            let text = action.text.trim()
            return [...state, text]
        case 'ADD_COMMENT_FAILURE':
            let text = action.text.trim()
            return [...state, text]
        default:
            return state
    }
}

// export {comment, posts, comments};
