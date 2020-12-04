import React from 'react';
import Header from './components/header/Header';
import PostContainer from './components/postContainer/PostContainer';
import { Container, Wrapper} from './appStyle';
import { useFeed } from './hooks';

export default function App() {
  const { data, isLoading } = useFeed();




  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <Wrapper>
        <h3>MOVIEinstagram</h3>
        <Header data={data.posts} bestFriends={data.bestFriends} />
        {data.posts.map((post) => (
          <PostContainer key={post.id} post={post} />
        ))}
      </Wrapper>
    </Container>
  );
}
