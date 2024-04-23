import * as S from './listOfCards.styles';
import { useEffect, useState } from 'react';
import { store } from '../../store/store';
import { Card } from '../card/card';

export const ListOfCards = ({ showFavorites }) => {
    // Список всех обьектов
    const [arrayForRender, setArrayForRender] = useState([]);
    // Список всех обьектов с лайком
    const [arrayOfLikes, setArrayOfLikes] = useState([]);

    store.subscribe(() => {
        if (store.getState().search.resultSearch.content.results) {
            setArrayForRender(
                store.getState().search.resultSearch.content.results
            );
        }
        setArrayOfLikes(store.getState().likes.array);
    });

    useEffect(() => {
        if (store.getState().search.resultSearch) {
            setArrayForRender(
                store.getState().search.resultSearch.content.results
            );
            setArrayOfLikes(store.getState().likes.array);
        }
    }, []);

    return (
        <S.Container>
            {
                // Если нажата кнопка "Показать избранное"
                showFavorites
                    ? // Рендер по массиву избранного
                      arrayOfLikes.map((item) => {
                          // Проверка есть ли книга в массиве всех книг, то есть не удалена
                          if (arrayForRender.includes(item)) {
                              return (
                                  <Card
                                      item={item}
                                      key={item.id}
                                      isLike={arrayOfLikes.includes(item)}
                                  />
                              );
                          }
                      })
                    : // Иначе рендер по массиву всех книг
                      arrayForRender.map((item) => {
                          return (
                              <Card
                                  item={item}
                                  key={item.id}
                                  isLike={arrayOfLikes.includes(item)}
                              />
                          );
                      })
            }
        </S.Container>
    );
};
