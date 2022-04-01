import React from 'react';
import { refactorDateString } from '../../../Helpers/refactorDateString';
import formatDistance from 'date-fns/formatDistance';
import { Wrapper } from './postDate.style';

export const PostDate = ({ postDate }) => {
  const date = refactorDateString(
    formatDistance(new Date(), new Date(postDate.toDate()))
  );

  return <Wrapper>{date}</Wrapper>;
};
