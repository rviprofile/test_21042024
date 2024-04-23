import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search.reducer';
import likesReducer from './like.reducer';

export const store = configureStore({
    reducer: {
        // Результат поиска
        search: searchReducer,
        // Лайки
        likes: likesReducer,
    },
});
