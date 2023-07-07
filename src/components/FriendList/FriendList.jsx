import css from './FriendList.module.css';
import PropTypes from "prop-types"

import FriendListItem from './FriendListItem';



export default function FriendList({ friends }) {
    
    return (
        <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline, id}) => (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        ))}
    </ul>
    ) 
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id:PropTypes.number
    }))
}
