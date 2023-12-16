import React, { useState } from 'react';

interface CommentFormProps {
    onAddComment: (comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
    const [comment, setComment] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Логика для добавления комментария
        onAddComment(comment);
        // Очистка формы
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          required
      />
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default CommentForm;
