import PropTypes from "prop-types"
import css from './FriendListItem.module.css'

export default function FriendListItem ({ id, isOnline, avatar, name }) {
    
    return (
        <li className={css.listItem}>
            <span
                style={{width:'12px',
                        height: '12px',
                        borderRadius:'50%'}}
                className={isOnline ?
                      css.statusOnLine
                    : css.statusOffLine}
            ></span>
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

