import Profile from './Profile/Profile.jsx'
import Statistics from './Statistics/Statistics.jsx'
import FriendList from './FriendList/FriendList.jsx'
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx'

import user from '../data-files/user.json'
import data from '../data-files/data.json'
import friends from '../data-files/friends.json'
import transactions from '../data-files/transactions.json'



export const App = () => {
  return (
    <div style={
      {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',

        padding:'15px'
      }
    }
    >
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatarUrl={user.avatar}
        stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
