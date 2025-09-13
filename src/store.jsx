import { createStore } from "redux";


const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
    task: []
}





const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],

            }
        case DELETE_TASK:
            const updateData = state.task.filter((curEle, index) => {

                return index !== action.payload;
            });
            return {
                ...state,
                task: updateData,

            }
        default:
            return state;
    }
};


const store = createStore(TaskReducer);
console.log(store);


console.log("initial state:", store.getState());


store.dispatch({
    type: ADD_TASK,
    payload: "ajit is master of mente"
});
store.dispatch({
    type: ADD_TASK,
    payload: "sujit is master of mente"
});
console.log("updated state :",store.getState());
store.dispatch({
    type:DELETE_TASK ,
    payload: 1
});
console.log("updated state :",store.getState());

