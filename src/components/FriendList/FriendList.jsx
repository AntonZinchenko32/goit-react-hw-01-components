import css from './FriendList.module.css';

import FriendListItem from './FriendListItem';



export default function FriendList({ friends }) {
    
    return (
        <ul className={css.friendList}>
        {friends.map(friend => (
            <FriendListItem
                key={friend.id}
                id={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>
    ) 
}


