import { removeItem } from '../store/creators';
import { store } from '../store/store';

export default function handleClose(item) {
    store.dispatch(removeItem(item));
}
