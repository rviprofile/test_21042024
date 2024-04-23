import { ADD_LIKE, REMOVE_LIKE } from './types';

const initialState = {
    array: [],
};

export default function likesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIKE: {
            return { ...state, array: [...state.array, action.payload] };
        }
        case REMOVE_LIKE: {
            return {
                ...state,
                array: [
                    ...state.array.filter((item) => item !== action.payload),
                ],
            };
        }
        default:
            return state;
    }
}
