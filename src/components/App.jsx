import Profile from './Profile.jsx'
import user from '../user.json'

console.log(user);

export const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatarUrl={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </>
  );
};
