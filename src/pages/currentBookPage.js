import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../store/store';
import { NavButton } from '../components/navButton/navButton';
import { CoverImg } from '../components/coverImg/coverImg';
import { Container } from '../components/container/container';
const img_src = 'image/jpeg';

export default function CurrentBookPage() {
    // Состояние с выбранной книгой
    const [currentBook, setCurrentBook] = useState();
    // Id выбранной книги из URL
    const id = useParams().id;
    useEffect(() => {
        // Ищем книгу с нужным id в store
        if (store.getState().search.resultSearch) {
            setCurrentBook(
                store
                    .getState()
                    .search.resultSearch.content.results.find(
                        (item) => item.id === id
                    )
            );
        }
    }, [id]);

    if (currentBook) {
        return (
            <Container>
                <NavButton />
                <CoverImg src={currentBook.formats[img_src]} />
                <hr />
                <div>
                    Название: <b>{currentBook.title}</b>
                </div>
                <div>
                    Автор: <b>{currentBook.authors[0].name}</b>
                </div>
                <div>
                    Есть на полках:
                    {currentBook.bookshelves.map((item) => {
                        return (
                            <b>
                                <p key={item}>{item}</p>
                            </b>
                        );
                    })}
                </div>
                <div>
                    Скачано раз: <b>{currentBook.download_count}</b>
                </div>
            </Container>
        );
    } else {
        return <h2>Ошибка</h2>;
    }
}
