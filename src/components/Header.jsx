import React from 'react'
import noteImage from '../assets/images/notes.png'
import tickImage from '../assets/images/double-tick.png'
import plusImage from '../assets/images/plus.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { allCompleted, clearCompleted, todoAdded } from '../redux/todos/actionCreators'


const Header = () => {
    const [todoName, setTodoName] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();



    const todoInputHandler = (event) => {
        setTodoName(event.target.value)
        setError(false);
    }

    const handelSubmit = (event) => {
        event.preventDefault()
        if (todoName !== '') {
            dispatch(todoAdded(todoName))
            setTodoName('');
            return
        }
        setError(true);
    }

    const handelAllCompleted = () => {
        dispatch(allCompleted());
    }

    const handelClearCompleted = () => {
        dispatch(clearCompleted());
    }

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handelSubmit}
            >
                <img
                    src={noteImage}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    value={todoName}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    onChange={todoInputHandler}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>
            {error && <p className='my-4 text-red-600'>Enter your todo</p>}

            <ul className="flex justify-between my-4 text-xs text-gray-500" >
                <li className="flex space-x-1 cursor-pointer" onClick={handelAllCompleted}>
                    <img
                        className="w-4 h-4"
                        src={tickImage}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handelClearCompleted}>Clear completed</li>
            </ul>
        </div>
    )
}

export default Header