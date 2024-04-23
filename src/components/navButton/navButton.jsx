import { Link } from 'react-router-dom';
import * as S from './navButton.styles';

export const NavButton = () => {
    return (
        <Link to="/">
            <S.Button>Вернуться в каталог</S.Button>
        </Link>
    );
};
