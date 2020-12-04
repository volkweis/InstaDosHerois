import React from 'react';
import Comment from '../comment/Comment';
import LikesComments from '../likesComments/LikesComments';
import UserImg from '../userImage/UserImg';
import { Row, Texto, Column, Comentario, CommentWrapper } from './captionStyle';

export default function Caption({ user, caption, likes, comments, postId }) {
  return (
    <Column>
      <Row>
        <UserImg userName={user} height="50px" width="50px" />
        <Texto>{caption}</Texto>
      </Row>
      <Row>
        <LikesComments postId={postId} likes={likes} comments={comments} />
      </Row>
      <CommentWrapper>
        {comments.map(comment =><Comentario key={comment.id}><Comment comment={comment}/></Comentario>)}
      </CommentWrapper>
    </Column>
  );
}
