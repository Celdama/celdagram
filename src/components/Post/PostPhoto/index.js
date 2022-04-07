import React from 'react';
import { Photo } from './postPhoto.style';

export const PostPhoto = ({ url, filter }) => {
  return <Photo src={url} alt='post' className={filter} />;
};
