


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
}