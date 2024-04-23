import * as S from './card.styles';
import handleLike from './../../helpers/handleLike';
import handleClose from '../../helpers/handleClose';
import { Link } from 'react-router-dom';
const img_src = 'image/jpeg';

export const Card = ({ item, isLike }) => {
    return (
        <S.CardBlock>
            <S.LikeAndCloseBlock>
                {
                    // Обьект находится в списке лайков?
                    isLike ? (
                        // Лайк активен
                        <S.Like
                            src="./like-active.svg"
                            onClick={() => handleLike(item, 'REMOVE')}
                        />
                    ) : (
                        // Иначе лайк не активен
                        <S.Like
                            src="./like.svg"
                            onClick={() => handleLike(item, 'ADD')}
                        />
                    )
                }
                <S.Close src="./close.svg" onClick={() => handleClose(item)} />
            </S.LikeAndCloseBlock>
            <Link to={`/${item.id}`}>
                <S.CoverImg src={item.formats[img_src]} alt="cover" />
                <p>
                    <b>{item.title}</b>
                </p>
                <p>{item.authors[0].name}</p>
            </Link>
        </S.CardBlock>
    );
};
