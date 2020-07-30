export const ActionType = ({
    GET_POSTS: "GET_POSTS"
})


export const getMovies = () => dispatch => {
    dispatch({
     type: ActionType.GET_POSTS,
    })
   }