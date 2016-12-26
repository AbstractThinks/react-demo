export function loadPosts(userId) {
    return {
        types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
        shouldCallAPI: (state) => !state.users[userId],
        callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
        payload: {
            userId
        }
    };
}

export function loadComments(postId) {
    return {
        types: ['LOAD_COMMENTS_REQUEST', 'LOAD_COMMENTS_SUCCESS', 'LOAD_COMMENTS_FAILURE'],
        shouldCallAPI: (state) => !state.posts[postId],
        callAPI: () => fetch(`http://myapi.com/posts/${postId}/comments`),
        payload: {
            postId
        }
    };
}

export function addComment(postId, message) {
    return {
        types: ['ADD_COMMENT_REQUEST', 'ADD_COMMENT_SUCCESS', 'ADD_COMMENT_FAILURE'],
        callAPI: () => fetch(`http://myapi.com/posts/${postId}/comments`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        }),
        payload: {
            postId,
            message
        }
    };
}
