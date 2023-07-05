import css from './FriendList.module.css';
import PropTypes from "prop-types"

const FriendList = ({ friends }) => (
    
    <ul className={css.friendList}>
        {friends.map(friend => (
            <li key={friend.id} className="item">
                {friend.isOnline ? (
                    <span className="status">Online</span>
                )
                : (
                    <span className="status">Offline</span>
                )}
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array,
};

export default FriendList;