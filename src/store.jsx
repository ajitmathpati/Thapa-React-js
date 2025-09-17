// import { createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';


// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete";
// const FETCH_TASK = "task/fetch";

const initialState = {
    task: []
}





// const TaskReducer = (state = initialState, action) => {
// switch (action.type) {
//     case ADD_TASK:
//         return {
//             ...state,
//             task: [...state.task, action.payload],

//         }
//     case DELETE_TASK:
//         const updateData = state.task.filter((curEle, index) => {

//             return index !== action.payload;
//         });
//         return {
//             ...state,
//             task: updateData,

//         }
//     case FETCH_TASK:
//         return {
//             ...state,
//             task: [...state.task, ...action.payload]
//         }
//     default:
//         return state;
// }

// // };

//! this traditional way to create store 
// export const store = createStore(TaskReducer, composeWithDevTools(applyMiddleware(thunk)));
// console.log(store);

//! we create new store with the help of redux toolkit
// export const store = configureStore({
//     reducer: {
//         TaskReducer,
//     },
// });

// console.log("initial state:", store.getState());


// store.dispatch({
//     type: ADD_TASK,
//     payload: "ajit is master of mente"
// });
// store.dispatch({
//     type: ADD_TASK,
//     payload: "sujit is master of mente"
// });



// console.log("updated state :", store.getState());
// store.dispatch({
//     type: DELETE_TASK,
//     payload: 1
// });
// console.log("updated state :", store.getState());

// ! Action Creator 


// export const AddTask = (Data) => {
//     return {
//         type: ADD_TASK,
//         payload: Data
//     };

// };
// store.dispatch(AddTask("Vipashna is my best friend"));
// store.dispatch(AddTask('balaji is my friend'));


// export const Delete = (Data) => {
//     return {
//         type: DELETE_TASK,
//         payload: Data
//     };
// };
// store.dispatch(Delete(2))
// store.dispatch(Delete(1))

// ! create slice 
const TaskReducer = createSlice({
    name: "Task",
    initialState,
    reducers: {
        AddTask(state, action) {
            state.task.push(action.payload);
        },
        Delete(state, action) {
            state.task = state.task.filter((curEle, index) => index !== action.payload);
        },
    },
});

const { AddTask, Delete } = TaskReducer.actions;

const store = configureStore({
    reducer: {

        TaskReducer: TaskReducer.reducer,
    },
});


// export const fetchTask = () => {
//     return async (dispatch) => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
//             const data = await res.json();
//             dispatch({
//                 type: FETCH_TASK,
//                 payload: data.map((curtask) => curtask.title)
//             })
//             console.log(data);




//         } catch (error) {
//             console.log(error);


//         };

//     }

// }

console.log(store.dispatch(AddTask("hi iam madhara uchi ha ")));


console.log(store.dispatch(AddTask(" i am ajhit mathpati  ")));



console.log("updated state :", store.getState());

export default TaskReducer;
