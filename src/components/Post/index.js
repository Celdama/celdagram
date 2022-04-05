import { UserAvatar } from '../UserAvatar';
import { Wrapper, ContentPost, AvatarWrapper } from './post.style';
import { usersSelector } from '../../store/selectors/usersSelector';
import { authSelector } from '../../store/selectors/authSelector';
import { useSelector } from 'react-redux';
import { PostPhoto } from './PostPhoto';
import { PostIconsStore } from './PostIcons';
import { PostLikesCounter } from './PostLikesCounter';
import { PostCommentsWrapper } from './PostCommentsWrapper';
import { PostDate } from './PostDate';
import { AddPostCommentStore } from './AddPostComment';

export const Post = ({ post, users, authUser }) => {
  const authorPost = users.filter((user) => user.uid === post.userId)[0];

  const { comments, photoURL, likes } = post;
  const { uid, avatar, username } = authorPost;

  console.log(username);

  return (
    <Wrapper>
      <AvatarWrapper>
        {authorPost && (
          <UserAvatar id={uid} url={avatar} name={username} size={30} />
        )}
      </AvatarWrapper>
      <PostPhoto url={photoURL} />
      <ContentPost>
        {authUser.email && <PostIconsStore post={post} />}
        <p>
          {username} - {post.description}
        </p>
        <PostLikesCounter likes={likes} />
        <PostCommentsWrapper comments={comments} />
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
