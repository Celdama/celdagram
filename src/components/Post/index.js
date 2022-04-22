import { useState } from 'react';
import { UserAvatar } from '../UserAvatar';
import { Wrapper, ContentPost, AvatarWrapper } from './post.style';
import { usersSelector } from '../../store/selectors/usersSelector';
import { authSelector } from '../../store/selectors/authSelector';
import { useSelector } from 'react-redux';
import { PostPhoto } from './PostPhoto';
import { PostIconsStore } from './PostIcons';
import { PostLikesCounter } from './PostLikesCounter';
import { PostCommentsWrapperStore } from './PostCommentsWrapper';
import { PostDate } from './PostDate';
import { AddPostCommentStore } from './AddPostComment';
import { PostDescription } from './PostDescription';

export const Post = ({ post, users, authUser }) => {
  const [showAllComments, setShowAllComments] = useState(false);

  const authorPost = users.filter((user) => user.uid === post.userId)[0];

  const { comments, photoURL, likes, filterClass } = post;
  const { uid, avatar, username } = authorPost;

  const handleLoadAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  return (
    <Wrapper>
      <AvatarWrapper>
        {authorPost && (
          <UserAvatar id={uid} url={avatar} name={username} size={30} />
        )}
      </AvatarWrapper>
      <PostPhoto url={photoURL} filter={filterClass} />
      <ContentPost>
        {authUser.email && <PostIconsStore post={post} />}
        <PostLikesCounter likes={likes} />
        {post.description && (
          <PostDescription username={username} desc={post.description} />
        )}
        {comments.length > 4 && !showAllComments && (
          <span className='show-all-comments' onClick={handleLoadAllComments}>
            View all {comments.length} comments
          </span>
        )}
        <PostCommentsWrapperStore
          comments={comments}
          showAllComments={showAllComments}
        />
        <PostDate postDate={post.date} />
      </ContentPost>
      {authUser.email && <AddPostCommentStore post={post} />}
    </Wrapper>
  );
};

export const PostStore = ({ post }) => {
  const users = useSelector(usersSelector);
  const authUser = useSelector(authSelector);

  return <Post authUser={authUser} post={post} users={users} />;
};
