import { ADD_TODO, REMOVE_TODO, GET_TODO } from "./actionCreater";

const initial_state = {
  todos: [],
}

export default function rootReducer(state = initial_state, action){
  switch (action.type) {
    case GET_TODO:
      return {...state, todos: action.data}
    case ADD_TODO:
      
        return{ ...state, todos:[...state.todos, action.task] };


    case REMOVE_TODO:
      let todos = state.todos.filter(val => val._id !== action.id);
      return {...state,todos};      
  
    default:
      return state;
  }
}
