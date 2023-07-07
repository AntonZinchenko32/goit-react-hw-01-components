import PropTypes from "prop-types"
import css from './FriendListItem.module.css'

export default function FriendListItem ({ id, isOnline, avatar, name }) {
    
    const { listItem, statusOnLine, statusOffLine, avatarStyled, nameStyled } = css;

    return (
        <li className={listItem}>
            <span
                style={{width:'12px',
                        height: '12px',
                        borderRadius: '50%',
                        marginRight:'15px'}}
                className= {isOnline ?
                      statusOnLine
                    : statusOffLine}
            ></span>
            <img className={avatarStyled} src={avatar} alt="User avatar" width="48" />
            <p className={nameStyled}>{name}</p>
        </li>
    ) 
}


FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string
};

