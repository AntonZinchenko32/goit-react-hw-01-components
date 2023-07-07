import css from './FriendListItem.module.css'

export default function FriendListItem ({ isOnline, avatar, name }) {
    
    // Деструктуризуємо об'єкт стилів
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

