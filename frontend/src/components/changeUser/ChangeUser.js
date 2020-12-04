import React from 'react';

import { Container, Titulo } from './changeUserStyle';
import ButtonUser from '../buttonUser/ButtonUser';

export default function ChangeUser({ bestFriends }) {

    if(bestFriends.length === 2) bestFriends.push('superman');

  return (
    <div>
        <Titulo>Trocar user:</Titulo>
      <Container>
        {bestFriends.map((friend) => (
          <ButtonUser key={friend} name={friend} />
        ))}
      </Container>
    </div>
  );
}
