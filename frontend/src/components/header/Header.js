import React from 'react';
import ActiveUser from '../activeUser/ActiveUser';
import ChangeUser from '../changeUser/ChangeUser';
import {Container} from './headerStyle';

export default function Header({ data, bestFriends }) {
  return (
    <Container>
      <ActiveUser data={data} />
      <ChangeUser bestFriends={bestFriends} />
    </Container>
  );
}
