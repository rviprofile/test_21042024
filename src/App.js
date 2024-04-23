import { useEffect } from 'react';
import { AppRoutes } from './routes.jsx';
import getAllBooks from './API/getAllBooks.js';

function App() {
    // Однократно обращаемся к API и получаем все книги
    useEffect(() => {
        getAllBooks();
    }, []);
    return <AppRoutes />;
}
export default App;
