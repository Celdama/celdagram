import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addFollowing,
  removeFollowing,
  addFollower,
  removeFollower,
} from '../../store/actions/usersAction';
import { authSelector } from '../../store/selectors/authSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { UserAvatar } from '../UserAvatar';
import { Wrapper, Photo, UserInfo, UserPhotos } from './profile.style';

export const Profile = ({ userProfile, id, posts, userLoggedIn }) => {
  const dispatch = useDispatch();

  const userPosts = posts.filter((post) => post.userId === userProfile.uid);

  const handleAddFollowing = (userLoggedIn, userToFollow) => {
    const { uid, avatar, username } = userLoggedIn;
    dispatch(addFollowing(uid, userToFollow));
    dispatch(
      addFollower(userToFollow.uid, {
        avatar,
        uid,
        username,
      })
    );
  };

  const handleRemoveFollowing = (userLoggedIn, userToUnfollow) => {
    const { uid, avatar, username } = userLoggedIn;

    dispatch(removeFollowing(userLoggedIn.uid, userToUnfollow));
    dispatch(
      removeFollower(userToUnfollow.uid, {
        avatar,
        uid,
        username,
      })
    );
  };

  const socialBtn =
    userLoggedIn && !userLoggedIn.followings.some((e) => e.uid === id) ? (
      <button
        onClick={() =>
          handleAddFollowing(userLoggedIn, {
            avatar: userProfile.avatar,
            uid: userProfile.uid,
            username: userProfile.username,
          })
        }
      >
        follow
      </button>
    ) : (
      <button
        onClick={() =>
          handleRemoveFollowing(userLoggedIn, {
            avatar: userProfile.avatar,
            uid: userProfile.uid,
            username: userProfile.username,
          })
        }
      >
        unfollow
      </button>
    );

  return (
    <Wrapper>
      <UserInfo>
        {userProfile && (
          <UserAvatar
            id={id}
            url={userProfile.avatar}
            name={userProfile.username}
            size={100}
            displayName={false}
          />
        )}
        {userProfile && (
          <div>
            <div className='user'>
              <h4>{userProfile.username}</h4>
              {userProfile !== userLoggedIn && socialBtn}
            </div>
            <div className='social'>
              <span>
                {userPosts.length} photo{userPosts.length > 1 ? 's' : ''}
              </span>
              <span>{userProfile.followers.length} followers</span>
              <span>{userProfile.followings.length} following</span>
            </div>
          </div>
        )}
      </UserInfo>
      <UserPhotos>
        {userPosts.map((post, index) => (
          <Photo key={index} imgUrl={post.photoURL} />
        ))}
      </UserPhotos>
    </Wrapper>
  );
};

export const ProfileStore = () => {
  const { id } = useParams();
  const users = useSelector(usersSelector);
  const posts = useSelector(postsSelector);
  const authUser = useSelector(authSelector);

  const userProfile = users.filter((user) => user.uid === id)[0];
  const userLoggedIn = users.filter((user) => user.uid === authUser.uid)[0];

  return (
    <Profile
      userProfile={userProfile}
      id={id}
      posts={posts}
      userLoggedIn={userLoggedIn}
    />
  );
};
