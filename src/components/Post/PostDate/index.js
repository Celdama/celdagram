import React from 'react';
import { Wrapper } from './postDate.style';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

export const PostDate = ({ postDate }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo('en-US');

  const formatedDate = timeAgo.format(new Date(postDate) - 60 * 1000);

  return <Wrapper>{formatedDate}</Wrapper>;
};
