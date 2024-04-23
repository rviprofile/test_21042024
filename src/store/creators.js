import { ADD_RESULT_SEARCH, ADD_LIKE, REMOVE_LIKE, REMOVE_ITEM } from './types';

export const AddResultSearch = (content) => ({
    type: ADD_RESULT_SEARCH,
    payload: {
        content,
    },
});

export const AddLike = (item) => ({
    type: ADD_LIKE,
    payload: item,
});

export const RemoveLike = (id) => ({
    type: REMOVE_LIKE,
    payload: id,
});

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item,
});
