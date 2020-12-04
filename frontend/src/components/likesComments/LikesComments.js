import React from 'react';
import { uuid } from 'uuidv4';
import { useMutation, useQueryCache } from 'react-query';
import { Container, Number, Icone } from './likesCommentsStyle';
import { useStore } from '../../stores';
import api from '../../services';

export default function LikesComments({ likes, comments, postId }) {
  const { user } = useStore();
  const hasLiked = likes.some((like) => like.user === user);

  const handleLikes = async () => {
    console.log(likes);
    if (!hasLiked) {
      const newLike = { id: uuid(), postId, user };
      await api.post('/likes', newLike);
    } else {
      const [likeByUser] = likes.filter((like) => like.user === user);
      await api.delete(`/likes/${likeByUser.id}`);
    }
  };

  const queryCache = useQueryCache();

  // When this mutation succeeds, invalidate any queries with the `todos` or `reminders` query key
  const [mutate] = useMutation(handleLikes, {
    onSuccess: () => {
      queryCache.invalidateQueries('feed');
    },
  });

  return (
    <Container>
      <Icone className="material-icons" onClick={mutate} title={likes.map(like =>like.user).join('\n')}>
        {hasLiked ? 'favorite' : 'favorite_border'}
      </Icone>
      <Number>{likes.length}</Number>
      <Icone className="material-icons">insert_comment</Icone>
      <Number>{comments.length}</Number>
    </Container>
  );
}
