import PropTypes from "prop-types"

export default function FriendListItem ({ id, isOnline, avatar, name }) {
    
    return (
        <li className="item">
        {isOnline ? (
            <span className="status">Online</span>
        )
        : (
            <span className="status">Offline</span>
            )}
        
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
    ) 
}


FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string
};

