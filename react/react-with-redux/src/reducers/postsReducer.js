import axios from 'axios';

const GET_POSTS = 'GET_POSTS';

export function getPosts() {
  return function(dispatch) {
    return axios({
      method: 'get',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => {
        dispatch({
          type: GET_POSTS,
          payload: data,
        });
      })
  }
}

const initialState = {
  posts: [],
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    default:
      return state;
  }
}
