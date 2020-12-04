import React from 'react';
import {Name, Row, Col} from './activeUserStyle';
import UserImg from '../userImage/UserImg';
import {useStore} from '../../stores';

export default function ActiveUser({ data }) {
  const {user: userName} = useStore();
  
  const totalPosts = data.reduce((acc, curr) => {
    if (curr.user === userName) {return acc+1;} else return acc;
  }, 0);

  const totalLikes = data.reduce((acc, curr) =>{
    if(curr.user === userName) {return acc + curr.likes.length;} else return acc;
  }, 0);

  const totalComments = data.reduce((acc, curr) =>{
    if(curr.user === userName) {return acc + curr.comments.length;} else return acc;
  }, 0);


  return (
    <div>
      <Row>
        <UserImg userName={userName} />
        <Col>
          <Name>{userName}</Name>
          <span>{totalPosts} posts</span>
          <span>{totalLikes} likes</span>
          <span>{totalComments} comments</span>
        </Col>
      </Row>
    </div>
  );
}
