import React from 'react';
import { Container, Image } from './userImgStyle';
import avatar from '../../assets/img';
import { useStore } from '../../stores';

export default function UserImg({ userName, height, width }) {
  const { user } = useStore();

  return (
    <Container>
      <Image
        height={height}
        width={width}
        src={avatar[userName || user]}
        alt={userName}
      />
    </Container>
  );
}
