export function loadboilerplateReducer1(userId) {
  return {
    types: ['LOAD_boilerplateReducer1_REQUEST', 'LOAD_boilerplateReducer1_SUCCESS', 'LOAD_boilerplateReducer1_FAILURE'],
    // shouldCallAPI: (state) => {
    //         !state.users[userId]
    // },
    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
    payload: { userId }
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
      body: JSON.stringify({ message })
    }),
    payload: { postId, message }
  };
}
