import React from 'react';
import axios from 'axios';

const initialState = {
  username: '',
  name: '',
  lastname: '',
  password: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.payload
      }
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'CHANGE_LASTNAME':
      return {
        ...state,
        lastname: action.payload
      }
    case 'CHANGE_PASSWORD':
      return {
        ...state,
        password: action.payload
      }
    // case 'RESET':
    //   return {
    //     ...state,
    //     ...initialState,
    //   }
    default:
      return state;
  }
}

const changeEnum = {
  username: 'CHANGE_USERNAME',
  name: 'CHANGE_NAME',
  lastname: 'CHANGE_LASTNAME',
  password: 'CHANGE_PASSWORD'
};

export function Signup({ history }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({ type: changeEnum[name], payload: value });
  }

  async function handleSumbit(e) {
    e.preventDefault();
    console.log('here')
    try {
      const { data: { token } } = await axios({
        method: 'post',
        baseURL: 'http://localhost:3000',
        url: '/admins/signup',
        data: state,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      localStorage.setItem('token', token);
      history.push('/');
    // dispatch({ type: 'RESET' })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="username">
        Nombre de Usuario
        <input onChange={handleChange} type="text" name="username" id="username"/>
      </label>
      <label htmlFor="name">
        Nombre
        <input onChange={handleChange} type="text" name="name" id="name"/>
      </label>
      <label htmlFor="lastname">
        Apellido
        <input onChange={handleChange} type="text" name="lastname" id="lastname"/>
      </label>
      <label htmlFor="password">
        Password
        <input onChange={handleChange} type="text" name="password" id="password"/>
      </label>
      <button type="submit">Ingresar</button>
    </form>
  );
}
