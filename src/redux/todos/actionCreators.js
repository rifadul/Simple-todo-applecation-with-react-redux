import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TODOCOMPLETED } from "./actionTypes"

export const todoAdded = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    };
};

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,
    };
};

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    };
};

export const todoDeleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    };
};

export const todoCompleted = (todoId) => {
    return {
        type: TODOCOMPLETED,
        payload: todoId,
    };
};

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        },
    };
};
