import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { AddTask } from "../store";
import { Delete } from "../store";
const Todo = () => {
    const [task, setTask] = useState("");
    const Dispatch = useDispatch();

    const State = useSelector((State) => State.task);
    console.log(State);
    const HandelForm = (e) => {
        e.preventDefault();

        Dispatch(AddTask(task));
        return setTask(" ");


    }
    const handelTaskdelete = (Data) => {

        Dispatch(Delete(Data));

    }

    return (
        <>

            <div className="container">
                <div className="todo-app">
                    <h1>
                        <i className="  fa-regular fa-pen-to-squar"></i>To-Do List
                    </h1>

                    <div className="row">
                        <form onSubmit={HandelForm}>
                            <input type="text" className="input-box" placeholder="Add a New Task" value={task} onChange={(e) => setTask(e.target.value)} />
                            <button type="submit">Add Task</button>
                        </form>
                    </div>
                    <ul className="listcontainer">
                        {
                            State.map((curEle, index) => {
                                return (



                                    < li key={index} >
                                        <p>{index}  :  {curEle}</p>
                                        < div >
                                            <MdDelete className="Icon-style" onClick={() => handelTaskdelete(index)} />
                                        </div>
                                    </li>

                                )


                            })

                        }

                    </ul>
                </div >
            </div >



        </>
    );
};
export default Todo