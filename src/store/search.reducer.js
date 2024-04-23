import { ADD_RESULT_SEARCH, REMOVE_ITEM } from './types';

const initialState = {};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RESULT_SEARCH: {
            return { ...state, resultSearch: action.payload };
        }
        case REMOVE_ITEM: {
            const updateArray = state.resultSearch.content.results.filter(
                (item) => item !== action.payload
            );

            return {
                ...state,
                resultSearch: { content: { results: updateArray } },
                
            };
        }
        default:
            return state;
    }
}
