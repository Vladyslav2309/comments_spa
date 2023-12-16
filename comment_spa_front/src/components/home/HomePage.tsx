import React, { useState, useEffect } from 'react';
import CommentForm from '../comments/CommentForm';

const HomePage: React.FC = () => {
    const [comments, setComments] = useState<string[]>([]);

    // Логика для загрузки комментариев с сервера
    useEffect(() => {
        // Ваш запрос к серверу для загрузки комментариев
    }, []);

    // Функция для обработки добавления комментария
    const handleAddComment = (comment: string) => {
        // Логика для отправки комментария на сервер и обновления состояния
    };

    return (
        <div>
            <h1>Comments</h1>
            <CommentForm onAddComment={handleAddComment} />
            {/* Отображение комментариев */}
        </div>
    );
};

export default HomePage;
