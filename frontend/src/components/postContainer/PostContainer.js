import React from 'react';
import Caption from '../caption/Caption';
import InsertComment from '../insertComment/InsertComment';
import Picture from '../picture/Picture';
import { Container, Column, Row } from './postContainerStyle';

export default function PostContainer({ post }) {
  return (
    <Container>
      <Column>
        <Row>
          <Picture picture={post.picture} alt={post.id} />
          <Caption
            postId={post.id}
            likes={post.likes}
            comments={post.comments}
            user={post.user}
            caption={post.title}
          />
        </Row>
        <div>
          <InsertComment post={post}/>
        </div>
      </Column>
    </Container>
  );
}
