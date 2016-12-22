export default const fetchPosts = (postTitle) => {
        return (dispatch, getState) => {
                dispatch(requestPosts(postTitle));
                return fetch('')
                        .then(response => response.json())
                        .then(json => dispatch(receivePost(postTitle, json)));
        }
}
