import { AddLike, RemoveLike } from '../store/creators';
import { store } from '../store/store';

export default function handleLike(item, type) {
    type === 'ADD'
        ? store.dispatch(AddLike(item))
        : store.dispatch(RemoveLike(item));
}
