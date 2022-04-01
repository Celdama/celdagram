import React from 'react';
import { Photo } from './postPhoto.style';

export const PostPhoto = ({ url }) => {
  return <Photo src={url} alt='post' />;
};
