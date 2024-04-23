import * as S from './favoritesFilterButton.styles';

export const FavoritesFilterButton = ({ showFavorites, setShowFavorites }) => {
    const handleButton = () => {
        setShowFavorites(!showFavorites);
    };
    return (
        <S.Button onClick={handleButton}>
            {showFavorites ? 'Показать все' : 'Показать избранное'}
        </S.Button>
    );
};
