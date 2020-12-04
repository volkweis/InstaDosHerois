import React, { useState, useRef } from 'react';
import { uuid } from 'uuidv4';
import { useMutation, useQueryCache } from 'react-query';
import api from '../../services';
import { useStore } from '../../stores';
import { Container, Icone } from './insertCommentStyle';

export default function InsertComment({ post }) {
  const [message, setMessage] = useState('');

  const textInputRef = useRef();

  const { user } = useStore();

  const handleComment = (event) => {
    setMessage(event.target.value);
  };

  const insereComment = async () => {
      if(message.length > 0) {
        const newComment = { id: uuid(), postId: post.id, comment: message, user };
        await api.post('/comments', newComment);
      } else return;
  };

  const queryCache = useQueryCache();

  // When this mutation succeeds, invalidate any queries with the `todos` or `reminders` query key
  const [mutate] = useMutation(insereComment, {
    onSuccess: () => {
      queryCache.invalidateQueries('feed');
      textInputRef.current.focus();
      setMessage('');
    },
  });

  return (
    <Container>
      <input
        type="text"
        placeholder="Deixe seu comentário."
        value={message}
        onChange={handleComment}
        ref={textInputRef}
      />
      <Icone className="material-icons" onClick={mutate}>send</Icone>
    </Container>
  );
}
