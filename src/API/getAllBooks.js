import axios from 'axios';
import { store } from '../store/store';
import { AddResultSearch } from '../store/creators';

const PORT = 'https://gutendex.com/books';

export default async function getAllBooks() {
    try {
        axios.get(PORT).then((result) => {
            store.dispatch(AddResultSearch(result.data));
        });
    } catch (err) {
        console.log(err);
    }
}
