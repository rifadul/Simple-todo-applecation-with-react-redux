import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { statusChanged, colorChanged } from '../redux/filters/actionCreators';

const Footer = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const selectedStatus = useSelector(state => state.filters.status);
    const { colors } = filters;

    const handelStatusChange = (status) => {
        dispatch(statusChanged(status));
    }

    const handelColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color, 'removed'));
        } else {
            dispatch(colorChanged(color, 'added'));
        }
    }

    const calculateRemainingTaks = () => {
        const remainingTask = todos.filter((todo) => !todo.completed).length;

        switch (remainingTask) {
            case 0:
                return "No task";

            case 1:
                return `${remainingTask} task`;

            default:
                return `${remainingTask} tasks`;
        }
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{calculateRemainingTaks()} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${selectedStatus === "All" && "font-bold"
                    }`} onClick={() => handelStatusChange('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${selectedStatus === "Incomplete" && "font-bold"
                    }`} onClick={() => handelStatusChange('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${selectedStatus === "Complete" && "font-bold"
                    }`} onClick={() => handelStatusChange('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && 'bg-green-500'}`}
                    onClick={() => handelColorChange('green')}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && 'bg-red-500'}`}
                    onClick={() => handelColorChange('red')}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && 'bg-yellow-500'}`}
                    onClick={() => handelColorChange('yellow')}
                ></li>
            </ul>
        </div>
    )
}

export default Footer;