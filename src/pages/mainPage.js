import { useState } from 'react';
import { FavoritesFilterButton } from '../components/favoritesFilterButton/favoritesFilterButton';
import { ListOfCards } from '../components/listOfCards/listOfCards';

export default function MainPage() {
    // Состояние нажата ли кнопка "Показать избранное"
    const [showFavorites, setShowFavorites] = useState(false);
    return (
        <div>
            <FavoritesFilterButton
                setShowFavorites={setShowFavorites}
                showFavorites={showFavorites}
            />
            <ListOfCards showFavorites={showFavorites} />
        </div>
    );
}
