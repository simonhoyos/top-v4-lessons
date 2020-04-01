import { createStore } from 'redux';
import uuid from 'uuid-random';

const INPUT_CHANGE = 'INPUT_CHANGE';
const CREATE_TASK = 'CREATE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

export function inputChange(title) {
  return {
    type: INPUT_CHANGE,
    payload: title
  };
}

export function createTask() {
  return {
    type: CREATE_TASK
  };
}

export function completeTask(id) {
  return {
    type: COMPLETE_TASK,
    payload: id
  }
}

function reducer(state, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        title: action.payload
      };
    case CREATE_TASK:
      const task = {
        id: uuid(),
        title: state.title,
        done: false,
      };
      return {
        ...state,
        tasks: state.tasks.concat(task),
        title: ''
      }
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if(task.id === action.payload) {
            return {
              ...task,
              done: !task.done,
            }
          }

          return task;
        })
      }
    default:
      return state;
  }
}

const initialState = {
  tasks: [],
  title: ''
};

export const store = createStore(reducer, initialState);
