import React from 'react';
import { Pic } from './pictureStyle';

export default function Picture({ picture, alt }) {
  return (
    <div>
      <Pic src={picture} alt={alt} />
    </div>
  );
}
