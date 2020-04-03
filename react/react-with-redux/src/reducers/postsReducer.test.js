import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import {
  GET_POSTS,
  getPosts,
  initialState,
  postsReducer,
} from './postsReducer';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const posts = [
  { id: 1, title: 'title', body: 'body' },
  { id: 2, title: 'title', body: 'body' },
  { id: 3, title: 'title', body: 'body' },
];

describe('postReducer', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('should return initialState by default', () => {
    const state = postsReducer(undefined, { type: 'invalid' });

    expect(state).toMatchObject(initialState);
  });

  it('should add posts to state', () => {
    const state = postsReducer(undefined, { type: GET_POSTS, payload: posts });
    expect(state.posts).toMatchObject(posts);
  });

  it('should request posts and dispatch GET_POSTS action with data', (done) => {
    const store = mockStore();
    const dispatch = store.dispatch;

    getPosts()(dispatch)

    moxios.wait(() =>  {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: posts
      }).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(GET_POSTS);
        expect(actions[0].payload).toMatchObject(posts);
        done();
      })
    })
  });
})
