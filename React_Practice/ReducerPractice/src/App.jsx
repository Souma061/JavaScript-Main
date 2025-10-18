import { useReducer,useEffect } from 'react'

import './App.css'

const initiaState = {
  loading:true,
  error: null,
  data:null
}

function fetchReducer(state,action) {
  switch(action.type) {
    case 'FETCH_SUCCESS' : 
    return {
      loading:false,
      error:null,
      data: action.payload
    };
    case 'FETCH_ERROR': 
    return {
      loading:false,
      error: 'Something went wrong!',
      data:null
    };
    default: 
    return state;
  }
}

const UserProfile = () => {
  const [state,dispatch] = useReducer(fetchReducer,initiaState)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({type: 'FETCH_SUCCESS', payload: data});
      } catch (error) {
        dispatch({type: 'FETCH_ERROR'});
      }
    }
    fetchData();
  },[])
  if(state.loading) {
    return <h2>Loading...</h2>
  }
  if(state.error) {
    return <h2>{state.error}</h2>
  }
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {state.data.name}</p>
      <p><strong>Email:</strong> {state.data.email}</p>
      <p><strong>Phone:</strong> {state.data.phone}</p>
      <p><strong>Website:</strong> {state.data.website}</p>
    </div>
  )
  
}

export default UserProfile