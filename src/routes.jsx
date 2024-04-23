import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import CurrentBookPage from './pages/currentBookPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<CurrentBookPage/>} />
        </Routes>
    );
};
